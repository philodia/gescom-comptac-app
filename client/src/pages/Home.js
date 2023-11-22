import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";
import axios from "axios";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/home/me")
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
          <Jumbotron>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Logo_Gescom_2018.svg/1200px-Logo_Gescom_2018.svg.png" alt="Logo Gescom" />
            <h1>Bienvenue sur Gescom-Compta</h1>
            <p>
              Cette application permet de gérer la comptabilité et la gestion d'une entreprise.
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
