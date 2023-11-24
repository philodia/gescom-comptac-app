import React, { useState } from "react";
import { Navbar, Nav, NavItem, NavLink, DropdownToggle, DropdownMenu, DropdownItem } from "react-bootstrap";
import axios from "axios";
const NavbarComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    axios.post("/api/logout").then(() => {
      window.location.href = "/";
    });
  };

  return (
    <Navbar bg="Dark" variant="light">
      <Navbar.Brand href="/">Gescom-Compta</Navbar.Brand>
      <Nav className="mr-auto">
        <NavItem>
          <NavLink href="/clients">Clients</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/factures">Factures</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/produits">Produits</NavLink>
        </NavItem>
      </Nav>
      {isLoggedIn && (
        <Nav>
          <DropdownToggle caret={true} id="navbarDropdown">
            <NavLink href="#">Mon compte</NavLink>
          </DropdownToggle>
          <DropdownMenu id="navbarDropdownMenu" aria-labelledby="navbarDropdown">
            <DropdownItem href="/compte">Mon profil</DropdownItem>
            <DropdownItem href="#">Mes factures</DropdownItem>
            <DropdownItem href="#">Mes produits</DropdownItem>
            <DropdownItem href="#" onClick={handleLogout}>Déconnexion</DropdownItem>
          </DropdownMenu>
        </Nav>
      )}
    </Navbar>
  );
};

export default NavbarComponent;
