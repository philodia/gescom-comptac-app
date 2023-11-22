import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
        </Col>
      </Row>
    </Container>
  );
}

export default Gescom;
