import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Axios from "axios";

const Client = ({ id }) => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    if (id) {
      Axios.get(`/gescom/compta/clients/${id}`).then((response) => {
        setClient(response.data);
      });
    }
  }, [id]);

  return (
    <Container>
      {client && (
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <h2>{client.nom}</h2>
              </Col>
              <Col>
                <Button onClick={() => window.location.href="/gescom/compta/clients"}>
                  Retour à la liste
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control value={client.prenom} disabled />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control value={client.email} disabled />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control value={client.telephone} disabled />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control value={client.adresse} disabled />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Client;
