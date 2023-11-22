import React, { useState, useEffect } from "react";
import { Nav, NavDropdown, DropdownMenu, DropdownItem } from "react-bootstrap";
import axios from "axios";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Gescom-Compta</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavDropdown title={user ? user.name : "Utilisateur"} id="basic-nav-dropdown">
          {user && (
            <DropdownMenu>
              <DropdownItem href="/auth/profil">Mon profil</DropdownItem>
              <DropdownItem href="/auth/logout">Déconnexion</DropdownItem>
            </DropdownMenu>
          )}
          {!user && (
            <DropdownMenu>
              <DropdownItem href="/auth/login">Connexion</DropdownItem>
              <DropdownItem href="/auth/register">Inscription</DropdownItem>
            </DropdownMenu>
          )}
          <Nav.Link href="/help">Aide</Nav.Link>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar;
