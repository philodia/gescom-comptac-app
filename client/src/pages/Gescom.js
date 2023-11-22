import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

function Gescom() {
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
          <h1>Gestion</h1>

          <Button variant="primary" href="/gescom/clients">Clients</Button>
          <Button variant="primary" href="/gescom/fournisseurs">Fournisseurs</Button>
          <Button variant="primary" href="/gescom/produits">Produits</Button>
          <Button variant="primary" href="/gescom/commandes">Commandes</Button>
          <Button variant="primary" href="/gescom/ventes">Ventes</Button>
          <Button variant="primary" href="/gescom/stocks">Stocks</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Gescom;
