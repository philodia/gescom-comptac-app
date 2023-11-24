import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const SidebarComptaComponent = () => {
  const [currentRoute, setCurrentRoute] = useState("");

  return (
    <div className="sidebar">
      <h2>Gestion Comptable</h2>
      <ul>
        <li>
          <NavLink to="/factures" activeClassName="active" onClick={() => setCurrentRoute("factures")}>
            Factures
          </NavLink>
        </li>
        <li>
          <NavLink to="/clients" activeClassName="active" onClick={() => setCurrentRoute("clients")}>
            Clients
          </NavLink>
        </li>
        <li>
          <NavLink to="/devis" activeClassName="active" onClick={() => setCurrentRoute("devis")}>
            Devis
          </NavLink>
        </li>
        <li>
          <NavLink to="/bon-livraison" activeClassName="active" onClick={() => setCurrentRoute("bon-livraison")}>
            Bons de livraison
          </NavLink>
        </li>
      </ul>
      <Button
        variant="primary"
        onClick={() => window.location.href = "/login"}
      >
        Logout
      </Button>
    </div>
  );
};

export default SidebarComptaComponent;
