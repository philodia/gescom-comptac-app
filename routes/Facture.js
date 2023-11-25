const express = require("express");
const router = express.Router();
const { User, Client, Produit, Devis, Facture } = require("../models/Facture");

// Affiche la page de création d'une facture
router.get("/nouvelle", (req, res) => {
  const user = req.user;

  res.render("facture-nouvelle", {
    user: user,
    clients: Client.find(),
    produits: Produit.find(),
  });
});

// Crée une nouvelle facture
router.post("/nouvelle", async (req, res) => {
  const user = req.user;

  const facture = new Facture({
    client: req.body.client,
    date: req.body.date,
    produits: req.body.produits,
    montant: req.body.montant,
  });
  facture.client = await Client.findById(req.body.client);
  facture.produits = await Produit.findByIds(req.body.produits);
  await facture.save();

  res.redirect("/gescom-compta/factures");
});

// Récupère une facture par son ID
router.get("/:id", async (req, res) => {
  const facture = await Facture.findById(req.params.id);
  res.json(facture);
});

// Met à jour une facture
router.put("/:id", async (req, res) => {
  const facture = await Facture.findById(req.params.id);
  facture.client = req.body.client;
  facture.date = req.body.date;
  facture.produits = req.body.produits;
  facture.montant = req.body.montant;
  await facture.save();

  res.redirect("/gescom-compta/factures");
});

// Supprime une facture
router.delete("/:id", async (req, res) => {
  await Facture.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
