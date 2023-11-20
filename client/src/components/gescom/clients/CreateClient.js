import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
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

    const { name, email, phone, address, city, country } = this.state;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        city,
        country,
      }),
    };

    fetch("/api/clients", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          this.props.history.push("/client/list");
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
    const { name, email, phone, address, city, country, error } = this.state;

    return (
      <div className="container">
        <h1>Créer un client</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Adresse</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Ville</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Pays</label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Créer</button>
        </form>
      </div>
    );
  }
}

export default CreateClient;
