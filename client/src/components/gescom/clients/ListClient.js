import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class ListClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
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

    fetch("/api/clients", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          this.setState({
            clients: data.data,
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
    const { clients, error } = this.state;

    return (
      <div className="container">
        <h1>Liste des clients</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        {clients.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Adresse</th>
                <th>Ville</th>
                <th>Pays</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.address}</td>
                  <td>{client.city}</td>
                  <td>{client.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default ListClient;
