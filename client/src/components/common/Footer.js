import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Nav>
              <Nav.Link href="#">Mentions légales</Nav.Link>
              <Nav.Link href="#">Conditions générales d'utilisation</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Copyright © 2023 Gescom-Compta. Tous droits réservés.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
