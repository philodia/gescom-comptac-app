import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Image } from "react-bootstrap";

const GescomComptaHome = () => {
  const [gescomcompta, setGescomCompta] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/gescom-compta").then((response) => {
      setGescomCompta(response.data);
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Logo_Gescom.svg/1200px-Logo_Gescom.svg.png"
            alt="Logo Gescom"
            style={{
              width: 200,
              height: 200,
            }}
          />
        </Col>
        <Col>
          <h1>Gescom-Compta</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default GescomComptaHome;
