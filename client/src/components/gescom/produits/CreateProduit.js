import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "react-bootstrap";
import { axios } from "axios";

const CreateProduitComponent = () => {
  const [produit, setProduit] = useState({
    reference: "",
    libelle: "",
    prix: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/produits", produit)
      .then((response) => {
        setProduit(response.data);
        window.location.href = "/produits";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h1>Créer un produit</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="reference">Référence</Label>
          <Input
            type="text"
            name="reference"
            id="reference"
            value={produit.reference}
            onChange={(event) => setProduit({ ...produit, reference: event.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="libelle">Libellé</Label>
          <Input
            type="text"
            name="libelle"
            id="libelle"
            value={produit.libelle}
            onChange={(event) => setProduit({ ...produit, libelle: event.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="prix">Prix</Label>
          <Input
            type="number"
            name="prix"
            id="prix"
            value={produit.prix}
            onChange={(event) => setProduit({ ...produit, prix: event.target.value })}
          />
        </FormGroup>

        <Button type="submit">Enregistrer</Button>
      </Form>
    </div>
  );
};

export default CreateProduitComponent;
