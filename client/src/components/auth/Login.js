import React, { useState } from "react";
import { Button, Container, Form, Row, Col, Input } from "react-bootstrap";
import axios from "axios";
import { Label } from 'react-bootstrap';
import { Input } from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole ] = useState("gescom");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username,
      password,
      role,
    };

    try {
      const response = await axios.post("http://localhost:5000/auth/login", data);

      if (response.status === 200) {
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
            <h1>Connexion</h1>

            <Label for="username">Nom d'utilisateur</Label>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Label for="password">Mot de passe</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Row>
              <Col md={6}>
                <Button variant="primary" type="submit">Se connecter</Button>
              </Col>
              <Col md={6}>
                <Button variant="primary" type="button">S'inscrire</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
