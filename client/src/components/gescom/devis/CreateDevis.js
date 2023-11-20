import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateDevis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: "",
      client: null,
      date: "",
      montant: "",
      error: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { numero, client, date, montant } = this.state;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numero,
        client,
        date,
        montant,
      }),
    };

    fetch("/api/devis", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          this.props.history.push("/devis/list");
        } else {
          this.setState({
            error: data.error,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { numero, client, date, montant, error } = this.state;

    return (
      <div className="container">
        <h1>Créer un devis</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="numero">Numéro</label>
            <input
              type="text"
              name="numero"
              value={numero}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="client">Client</label>
            <select
              name="client"
              value={client}
              onChange={this.handleChange}
              className="form-control"
            >
              <option value="">-- Choisir un client --</option>
              {this.getClientsOptions()}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="montant">Montant</label>
            <input
              type="number"
              name="montant"
              value={montant}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Créer</button>
        </form>
      </div>
    );
  }

  getClientsOptions() {
    const clients = [
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Jane Doe",
      },
    ];

    return clients.map((client) => (
      <option key={client.id} value={client.id}>{client.name}</option>
    ));
  }
}

export default CreateDevis;
