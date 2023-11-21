import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class UserProfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
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

    fetch("/api/user", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          this.setState({
            user: data.data,
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
    const { user, error } = this.state;

    return (
      <div className="container">
        <h1>Profil</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        {user && (
          <div>
            <h2>Nom d'utilisateur</h2>
            <p>{user.username}</p>
            <h2>Email</h2>
            <p>{user.email}</p>
          </div>
        )}
      </div>
    );
  }
}

export default UserProfil;
