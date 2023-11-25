const express = require("express");
const { Client, Fournisseur, Produit, BonLivraison } = require("./models/GescomCompta");

const gescomComptaController = express.Router();

gescomComptaController.get("/clients", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

gescomComptaController.get("/fournisseurs", async (req, res) => {
  const fournisseurs = await Fournisseur.find();
  res.json(fournisseurs);
});

gescomComptaController.get("/produits", async (req, res) => {
  const produits = await Produit.find();
  res.json(produits);
});

gescomComptaController.get("/bonsDeLivraison", async (req, res) => {
  const bonsDeLivraison = await BonLivraison.find();
  res.json(bonsDeLivraison);
});

gescomComptaController.post("/clients", async (req, res) => {
  const client = new Client({
    nom: req.body.nom,
    adresse: req.body.adresse,
    telephone: req.body.telephone,
    email: req.body.email,
  });

  await client.save();
  res.json(client);
});

gescomComptaController.post("/fournisseurs", async (req, res) => {
  const fournisseur = new Fournisseur({
    nom: req.body.nom,
    adresse: req.body.adresse,
    telephone: req.body.telephone,
    email: req.body.email,
  });

  await fournisseur.save();
  res.json(fournisseur);
});

gescomComptaController.post("/produits", async (req, res) => {
  const produit = new Produit({
    code: req.body.code,
    designation: req.body.designation,
    prixUnitaire: req.body.prixUnitaire,
    stock: req.body.stock,
    categorie: req.body.categorie,
  });

  await produit.save();
  res.json(produit);
});

gescomComptaController.post("/bonsDeLivraison", async (req, res) => {
  const bonDeLivraison = new BonLivraison({
    date: req.body.date,
    client: req.body.client,
    produits: req.body.produits,
    total: req.body.total,
  });

  await bonDeLivraison.save();
  res.json(bonDeLivraison);
});

module.exports = gescomComptaController;
