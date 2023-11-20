import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import Home from "./pages/Home";
import GescomCompta from "./pages/GescomCompta";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Gescom-Compta</Navbar.Brand>
            <Nav>
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Link href="/login">Connexion</Nav.Link>
            </Nav>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gescomCompta" element={<GescomCompta />} />
          </Routes>
        </Container>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
