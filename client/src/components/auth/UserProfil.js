import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "react-bootstrap";
import Axios from "axios";

const UserProfil = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState("gescom");

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("/api/auth/update-profil", {
      email,
      password,
      option,
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Profil mis à jour avec succès");
        } else {
          alert(response.data.error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <Label for="password">Mot de passe</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="option">
          <Label for="option">Option</Label>
          <select name="option" onChange={(e) => setOption(e.target.value)}>
            <option value="gescom">Gescom</option>
            <option value="compta">Compta</option>
            <option value="admin">Admin</option>
          </select>
        </FormGroup>
        <Button type="submit">Mettre à jour le profil</Button>
      </Form>
    </div>
  );
};

export default UserProfil;
