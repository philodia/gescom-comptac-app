import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

function Compta() {
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

  if (!user) {
    return <div>Chargement...</div>;
  }

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1>Comptabilité</h1>

          <Button variant="primary" href="/compta/comptes">Comptes</Button>
          <Button variant="primary" href="/compta/factures">Factures</Button>
          <Button variant="primary" href="/compta/journaux">Journaux</Button>
          <Button variant="primary" href="/compta/balance">Balance</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Compta;
