import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Client from "../components/gescom/clients/Client";
import Devis from "../components/gescom/devis/Devis";
import Compte from "../components/compta/compte/Compte";

class GescomCompta extends Component {
  render() {
    return (
      <div className="container">
        <h1>Gescom Compta</h1>
        <ul className="nav nav-tabs">
          <li><Link to="/client">Clients</Link></li>
          <li><Link to="/devis">Devis</Link></li>
          <li><Link to="/compte">Comptes</Link></li>
        </ul>
        <Route path="/client" component={Client} />
        <Route path="/devis" component={Devis} />
        <Route path="/compte" component={Compte} />
      </div>
    );
  }
}

export default GescomCompta;
