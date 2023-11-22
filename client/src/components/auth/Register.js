import React, { useState } from "react";
import { Button, Container, Form, Row, Col, Input } from "react-bootstrap";
import axios from "axios";
import { Label } from 'node_modules/my-react-bootstrap';

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, ] = useState("gescom");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username,
      password,
      role,
    };

    try {
      const response = await axios.post("http://localhost:5000/auth/register", data);

      if (response.status === 201) {
        window.location.href = `/${role}`;
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Form onSubmit={handleSubmit}>
            <h1>Inscription</h1>

            <Label for="username">Nom d'utilisateur</Label>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <Label for="password">Mot de passe</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Row>
              <Col md={6}>
                <Button variant="primary" type="submit">S'inscrire</Button>
              </Col>
              <Col md={6}>
                <Button variant="primary" type="button">Se connecter</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
