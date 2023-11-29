import React, { useState } from "react";
import { Button, Form, Input, Label } from "react-bootstrap";
import axios from "axios";

const CreateProduit = () => {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState(0);
  const [quantite, setQuantite] = useState(0);
  const [categorie, setCategorie] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nom,
      description,
      prix,
      quantite,
      categorie,
      image,
    };

    await axios.post("/gescom/compta/produits", data);

    window.location.href = "/gescom/compta/produits";
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label for="nom">Nom</Label>
      <Input
        type="text"
        id="nom"
        placeholder="Nom du produit"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <Label for="description">Description</Label>
      <Input
        type="text"
        id="description"
        placeholder="Description du produit"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Label for="prix">Prix</Label>
      <Input
        type="number"
        id="prix"
        placeholder="Prix du produit"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
      />
      <Label for="quantite">Quantité</Label>
      <Input
        type="number"
        id="quantite"
        placeholder="Quantité du produit"
        value={quantite}
        onChange={(e) => setQuantite(e.target.value)}
      />
      <Label for="categorie">Catégorie</Label>
      <Input
        type="text"
        id="categorie"
        placeholder="Catégorie du produit"
        value={categorie}
        onChange={(e) => setCategorie(e.target.value)}
      />
      <Label for="image">Image</Label>
      <Input
        type="text"
        id="image"
        placeholder="URL de l'image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button type="submit">Créer</Button>
    </Form>
  );
};

export default CreateProduit;
