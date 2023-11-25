import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "react-bootstrap";
import { axios } from "axios";

const CreateComptesComponent = () => {
  const [compte, setCompte] = useState({
    libelle: "",
    type: "",
    solde: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/comptes", compte)
      .then((response) => {
        setCompte(response.data);
        window.location.href = "/comptes";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h1>Créer un compte</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="libelle">Libellé</Label>
          <Input
            type="text"
            name="libelle"
            id="libelle"
            value={compte.libelle}
            onChange={(event) => setCompte({ ...compte, libelle: event.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="type">Type</Label>
          <Input
            type="text"
            name="type"
            id="type"
            value={compte.type}
            onChange={(event) => setCompte({ ...compte, type: event.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="solde">Solde</Label>
          <Input
            type="number"
            name="solde"
            id="solde"
            value={compte.solde}
            onChange={(event) => setCompte({ ...compte, solde: event.target.value })}
          />
        </FormGroup>

        <Button type="submit">Enregistrer</Button>
      </Form>
    </div>
  );
};

export default CreateComptesComponent;
