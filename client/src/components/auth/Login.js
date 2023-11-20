import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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

    const { email, password } = this.state;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    fetch("/api/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          this.props.history.push("/home");
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
    const { email, password, error } = this.state;

    return (
      <div className="container">
        <h1>Connexion</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={this.handleSubmit}>
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
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Connexion</button>
        </form>
      </div>
    );
  }
}

export default Login;
