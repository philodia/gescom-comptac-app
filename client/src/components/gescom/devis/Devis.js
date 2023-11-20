import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateDevis from "./CreateDevis";
import ListDevis from "./ListDevis";

class Devis extends Component {
  render() {
    return (
      <div className="container">
        <h1>Devis</h1>
        <ul className="nav nav-tabs">
          <li><Link to="/devis/create">Créer</Link></li>
          <li><Link to="/devis/list">Liste</Link></li>
        </ul>
        <Route path="/devis/create" component={CreateDevis} />
        <Route path="/devis/list" component={ListDevis} />
      </div>
    );
  }
}

export default Devis;
