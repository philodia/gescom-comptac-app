import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "react-bootstrap";
import { axios } from "axios";

const CreateDevisComponent = () => {
  const [devis, setDevis] = useState({
    client: { id: 1 },
    date: "",
    montant: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/devis", devis)
      .then((response) => {
        setDevis(response.data);
        window.location.href = "/devis";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h1>Créer un devis</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="client">Client</Label>
          <Input
            type="select"
            name="client"
            id="client"
            value={devis.client.id}
            onChange={(event) => setDevis({ ...devis, client: event.target.value })}
          >
            <option value={1}>Jean Dupont</option>
            <option value={2}>Marie Martin</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="date">Date</Label>
          <Input
            type="date"
            name="date"
            id="date"
            value={devis.date}
            onChange={(event) => setDevis({ ...devis, date: event.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="montant">Montant</Label>
          <Input
            type="number"
            name="montant"
            id="montant"
            value={devis.montant}
            onChange={(event) => setDevis({ ...devis, montant: event.target.value })}
          />
        </FormGroup>

        <Button type="submit">Enregistrer</Button>
      </Form>
    </div>
  );
};

export default CreateDevisComponent;
