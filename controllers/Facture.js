const express = require("express");
const router = express.Router();
const { Facture } = require("../models/Facture");

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
    client: data.client,
    numero: data.numero,
    date: data.date,
    montant: data.montant,
    etat: data.etat,
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

  facture.client = data.client || facture.client;
  facture.numero = data.numero || facture.numero;
  facture.date = data.date || facture.date;
  facture.montant = data.montant || facture.montant;
  facture.etat = data.etat || facture.etat;

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

// Affiche la liste des produits d'une facture
router.get("/:id/produits", async (req, res) => {
  const id = req.params.id;

  const facture = await Facture.findById(id);

  if (!facture) {
    res.status(404).send("Facture non trouvée");
    return;
  }

  const produits = await facture.getProduits();

  res.json(produits);
});

module.exports = router;
