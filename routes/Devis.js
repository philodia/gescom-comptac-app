const express = require("express");
const router = express.Router();
const { User, Client, Produit, Devis } = require("../models/Devis");

// Affiche la page de création d'un devis
router.get("/nouvelle", (req, res) => {
  const user = req.user;

  res.render("devis-nouvelle", {
    user: user,
    clients: Client.find(),
    produits: Produit.find(),
  });
});

// Crée un nouveau devis
router.post("/nouvelle", async (req, res) => {
  const user = req.user;

  const devis = new Devis({
    client: req.body.client,
    date: req.body.date,
    produits: req.body.produits,
    montant: req.body.montant,
  });
  devis.client = await Client.findById(req.body.client);
  devis.produits = await Produit.findByIds(req.body.produits);
  await devis.save();

  res.redirect("/gescom-compta/devis");
});

// Récupère un devis par son ID
router.get("/:id", async (req, res) => {
  const devis = await Devis.findById(req.params.id);
  res.json(devis);
});

// Met à jour un devis
router.put("/:id", async (req, res) => {
  const devis = await Devis.findById(req.params.id);
  devis.client = req.body.client;
  devis.date = req.body.date;
  devis.produits = req.body.produits;
  devis.montant = req.body.montant;
  await devis.save();

  res.redirect("/gescom-compta/devis");
});

// Supprime un devis
router.delete("/:id", async (req, res) => {
  await Devis.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
