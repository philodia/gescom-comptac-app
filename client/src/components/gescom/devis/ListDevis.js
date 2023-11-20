import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class ListDevis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devis: [],
      error: null,
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("/api/devis", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          this.setState({
            devis: data.data,
          });
        } else {
          this.setState({
            error: data.error,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { devis, error } = this.state;

    return (
      <div className="container">
        <h1>Liste des devis</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        {devis.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Numéro</th>
                <th>Client</th>
                <th>Date</th>
                <th>Montant</th>
              </tr>
            </thead>
            <tbody>
              {devis.map((devis) => (
                <tr key={devis.id}>
                  <td>{devis.numero}</td>
                  <td>{devis.client.name}</td>
                  <td>{devis.date}</td>
                  <td>{devis.montant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default ListDevis;
