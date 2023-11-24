import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "react-bootstrap";
import { axios } from "axios";

const CreateClientComponent = () => {
  const [client, setClient] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/clients", client)
      .then((response) => {
        setClient(response.data);
        window.location.href = "/clients";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h1>Créer un client</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="nom">Nom</Label>
          <Input
            type="text"
            name="nom"
            id="nom"
            placeholder="Nom du client"
            value={client.nom}
            onChange={(event) => setClient({ ...client, nom: event.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="prenom">Prénom</Label>
          <Input
            type="text"
            name="prenom"
            id="prenom"
            placeholder="Prénom du client"
            value={client.prenom}
            onChange={(event) => setClient({ ...client, prenom: event.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email du client"
            value={client.email}
            onChange={(event) => setClient({ ...client, email: event.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="telephone">Téléphone</Label>
          <Input
            type="text"
            name="telephone"
            id="telephone"
            placeholder="Téléphone du client"
            value={client.telephone}
            onChange={(event) => setClient({ ...client, telephone: event.target.value })}
          />
        </FormGroup>

        <Button type="submit">Enregistrer</Button>
      </Form>
    </div>
  );
};

export default CreateClientComponent;
