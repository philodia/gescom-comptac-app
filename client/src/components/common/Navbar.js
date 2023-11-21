import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

class CustomNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Gescom-Compta</a>        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link path="/" className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to="/connexion" className="nav-link">Connexion</Link>
            </li>
            <li className="nav-item">
              <Link to="/inscription" className="nav-link">Inscription</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default CustomNavbar;
