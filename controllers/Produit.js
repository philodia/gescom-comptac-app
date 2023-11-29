const express = require("express");
const router = express.Router();
const { Produit } = require("../models/Produit");

// Affiche la liste des produits
router.get("/", async (req, res) => {
  const produits = await Produit.find();

  res.json(produits);
});

// Affiche les détails d'un produit
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const produit = await Produit.findById(id);

  if (!produit) {
    res.status(404).send("Produit non trouvé");
    return;
  }

  res.json(produit);
});

// Crée un nouveau produit
router.post("/", async (req, res) => {
  const data = req.body;

  const produit = new Produit({
    nom: data.nom,
    description: data.description,
    prix: data.prix,
    image: data.image,
  });

  await produit.save();

  res.status(201).send(produit);
});

// Modifie un produit
router.put("/:id", async (req, res) => {
  const id = req.params.id;

  const data = req.body;

  const produit = await Produit.findById(id);

  if (!produit) {
    res.status(404).send("Produit non trouvé");
    return;
  }

  produit.nom = data.nom || produit.nom;
  produit.description = data.description || produit.description;
  produit.prix = data.prix || produit.prix;
  produit.image = data.image || produit.image;

  await produit.save();

  res.status(200).send(produit);
});

// Supprime un produit
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const produit = await Produit.findById(id);

  if (!produit) {
    res.status(404).send("Produit non trouvé");
    return;
  }

  await produit.delete();

  res.status(200).send();
});

// Affiche la liste des bons de livraison d'un produit
router.get("/:id/bonlivraisons", async (req, res) => {
  const id = req.params.id;

  const produit = await Produit.findById(id);

  if (!produit) {
    res.status(404).send("Produit non trouvé");
    return;
  }

  const bonsLivraisons = await produit.getBonLivraisons();

  res.json(bonsLivraisons);
});

// Affiche la liste des devis d'un produit
router.get("/:id/devis", async (req, res) => {
  const id = req.params.id;

  const produit = await Produit.findById(id);

  if (!produit) {
    res.status(404).send("Produit non trouvé");
    return;
  }

  const devis = await produit.getDevis();

  res.json(devis);
});

// Affiche la liste des factures d'un produit
router.get("/:id/factures", async (req, res) => {
  const id = req.params.id;

  const produit = await Produit.findById(id);

  if (!produit) {
    res.status(404).send("Produit non trouvé");
    return;
  }

  const factures = await produit.getFactures();

  res.json(factures);
});

module.exports = router;
