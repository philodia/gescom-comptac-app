import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Input } from "react-bootstrap";
import axios from "axios";
import { Label } from 'node_modules/my-react-bootstrap';

function UserProfil() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/users/me")
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
          <h1>Profil utilisateur</h1>

          <Row>
            <Col md={6}>
              <Label for="username">Nom d'utilisateur</Label>
              <Input
                type="text"
                name="username"
                value={user.username}
                readOnly
              />
            </Col>
            <Col md={6}>
              <Label for="role">Rôle</Label>
              <Input
                type="text"
                name="role"
                value={user.role}
                readOnly
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Label for="name">Nom</Label>
              <Input
                type="text"
                name="name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </Col>
            <Col md={6}>
              <Label for="surname">Prénom</Label>
              <Input
                type="text"
                name="surname"
                value={user.surname}
                onChange={(e) => setUser({ ...user, surname: e.target.value })}
              />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Button variant="primary" type="submit">Enregistrer</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfil;
