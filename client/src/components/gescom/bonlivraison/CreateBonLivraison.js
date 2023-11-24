import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "react-bootstrap";
import { axios } from "axios";

const CreateBonLivraisonComponent = () => {
  const [bonLivraison, setBonLivraison] = useState({
    devis: { id: 1 },
    date: "",
    montant: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/bon-livraison", bonLivraison)
      .then((response) => {
        setBonLivraison(response.data);
        window.location.href = "/bon-livraison";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h1>Créer un bon de livraison</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="devis">Devis</Label>
          <Input
            type="select"
            name="devis"
            id="devis"
            value={bonLivraison.devis.id}
            onChange={(event) => setBonLivraison({ ...bonLivraison, devis: event.target.value })}
          >
            <option value={1}>Devis 1</option>
            <option value={2}>Devis 2</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="date">Date</Label>
          <Input
            type="date"
            name="date"
            id="date"
            value={bonLivraison.date}
            onChange={(event) => setBonLivraison({ ...bonLivraison, date: event.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="montant">Montant</Label>
          <Input
            type="number"
            name="montant"
            id="montant"
            value={bonLivraison.montant}
            onChange={(event) => setBonLivraison({ ...bonLivraison, montant: event.target.value })}
          />
        </FormGroup>

        <Button type="submit">Enregistrer</Button>
      </Form>
    </div>
  );
};

export default CreateBonLivraisonComponent;
