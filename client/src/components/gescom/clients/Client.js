import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateClient from "./CreateClient";
import ListClient from "./ListClient";

class Client extends Component {
  render() {
    return (
      <div className="container">
        <h1>Clients</h1>
        <ul className="nav nav-tabs">
          <li><Link to="/client/create">Créer</Link></li>
          <li><Link to="/client/list">Liste</Link></li>
        </ul>
        <Route path="/client/create" component={CreateClient} />
        <Route path="/client/list" component={ListClient} />
      </div>
    );
  }
}

export default Client;
