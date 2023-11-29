const express = require("express");
const router = express.Router();
const { Devis } = require("../models/Devis");
const { Client } = require("../models/Client");
const { Produit } = require("../models/Produit");

// Affiche la liste des devis
router.get("/", async (req, res) => {
  const devis = await Devis.find();

  res.json(devis);
});

// Affiche les détails d'un devis
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const devis = await Devis.findById(id);

  if (!devis) {
    res.status(404).send("Devis non trouvé");
    return;
  }

  res.json(devis);
});

// Crée un nouveau devis
router.post("/", async (req, res) => {
  const data = req.body;

  const devis = new Devis({
    client: data.client,
    date: data.date,
    reference: data.reference,
    etat: data.etat,
    produits: data.produits,
  });

  await devis.save();

  res.status(201).send(devis);
});

// Modifie un devis
router.put("/:id", async (req, res) => {
  const id = req.params.id;

  const data = req.body;

  const devis = await Devis.findById(id);

  if (!devis) {
    res.status(404).send("Devis non trouvé");
    return;
  }

  devis.client = data.client || devis.client;
  devis.date = data.date || devis.date;
  devis.reference = data.reference || devis.reference;
  devis.etat = data.etat || devis.etat;
  devis.produits = data.produits || devis.produits;

  await devis.save();

  res.status(200).send(devis);
});

// Supprime un devis
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const devis = await Devis.findById(id);

  if (!devis) {
    res.status(404).send("Devis non trouvé");
    return;
  }

  await devis.delete();

  res.status(200).send();
});

// Liste des produits d'un devis
router.get("/:id/produits", async (req, res) => {
  const id = req.params.id;

  const devis = await Devis.findById(id);

  if (!devis) {
    res.status(404).send("Devis non trouvé");
    return;
  }

  const produits = await Produit.find({ _id: { $in: devis.produits } });

  res.json(produits);
});


module.exports = router;
