import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <p className="text-center">
            Copyright &copy; 2023 Gescom-Compta
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
