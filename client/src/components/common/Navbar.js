import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Navbar as Nav, NavDropdown } from "react-bootstrap";

const Navbar = () => {
  const [user, setUser] = useState({
    id: null,
    nom: "",
    prenom: "",
    email: "",
  });

  const history = useHistory();

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

  const handleLogout = () => {
    axios.post("/api/users/logout");
    history.push("/");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Gescom-Compta</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Accueil</Nav.Link>
          <Nav.Link href="/profil">Mon profil</Nav.Link>
        </Nav>
        <NavDropdown title="Connexion" id="basic-nav-dropdown">
          {!user.id ? (
            <NavDropdown.Item href="/login">Se connecter</NavDropdown.Item>
          ) : (
            <NavDropdown.Item onClick={handleLogout}>Se déconnecter</NavDropdown.Item>
          )}
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar;
