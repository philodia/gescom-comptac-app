const express = require("express");
const router = express.Router();
const { Facture } = require("../models/Facture");
const { Client } = require("../models/Client");

// Affiche la liste des factures
router.get("/", async (req, res) => {
  const factures = await Facture.find();

  res.json(factures);
});

// Affiche les détails d'une facture
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const facture = await Facture.findById(id);

  if (!facture) {
    res.status(404).send("Facture non trouvée");
    return;
  }

  res.json(facture);
});

// Crée une nouvelle facture
router.post("/", async (req, res) => {
  const data = req.body;

  const facture = new Facture({
    numFacture: data.numFacture,
    dateFacture: data.dateFacture,
    client: data.client,
    tva: data.tva,
    totalHT: data.totalHT,
    totalTTC: data.totalTTC,
  });

  await facture.save();

  res.status(201).send(facture);
});

// Modifie une facture
router.put("/:id", async (req, res) => {
  const id = req.params.id;

  const data = req.body;

  const facture = await Facture.findById(id);

  if (!facture) {
    res.status(404).send("Facture non trouvée");
    return;
  }

  facture.numFacture = data.numFacture || facture.numFacture;
  facture.dateFacture = data.dateFacture || facture.dateFacture;
  facture.client = data.client || facture.client;
  facture.tva = data.tva || facture.tva;
  facture.totalHT = data.totalHT || facture.totalHT;
  facture.totalTTC = data.totalTTC || facture.totalTTC;

  await facture.save();

  res.status(200).send(facture);
});

// Supprime une facture
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const facture = await Facture.findById(id);

  if (!facture) {
    res.status(404).send("Facture non trouvée");
    return;
  }

  await facture.delete();

  res.status(200).send();
});

// Liste des produits d'une facture
router.get("/:id/produits", async (req, res) => {
  const id = req.params.id;

  const facture = await Facture.findById(id);

  if (!facture) {
    res.status(404).send("Facture non trouvée");
    return;
  }

  const produits = await facture.produits;

  res.json(produits);
});

// Liste des clients d'une facture
router.get("/:id/clients", async (req, res) => {
  const id = req.params.id;

  const facture = await Facture.findById(id);

  if (!facture) {
    res.status(404).send("Facture non trouvée");
    return;
  }

  const clients = await facture.clients;

  res.json(clients);
});

module.exports = router;
