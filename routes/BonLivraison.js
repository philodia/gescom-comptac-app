const express = require("express");
const router = express.Router();
const { User, Client, Produit, Devis, Fournisseur, BonLivraison } = require("../models/BonLivraison");

// Affiche la page de création d'un bon de livraison
router.get("/nouvelle", (req, res) => {
  const user = req.user;

  res.render("bon-livraison-nouvelle", {
    user: user,
    clients: Client.find(),
    produits: Produit.find(),
    devis: Devis.find(),
  });
});

// Crée un nouveau bon de livraison
router.post("/nouvelle", async (req, res) => {
  const user = req.user;

  const bonLivraison = new BonLivraison({
    client: req.body.client,
    date: req.body.date,
    produits: req.body.produits,
    montant: req.body.montant,
  });
  bonLivraison.client = await Client.findById(req.body.client);
  bonLivraison.produits = await Produit.findByIds(req.body.produits);
  await bonLivraison.save();

  res.redirect("/gescom-compta/bons-livraison");
});

// Récupère un bon de livraison par son ID
router.get("/:id", async (req, res) => {
  const bonLivraison = await BonLivraison.findById(req.params.id);
  res.json(bonLivraison);
});

// Met à jour un bon de livraison
router.put("/:id", async (req, res) => {
  const bonLivraison = await BonLivraison.findById(req.params.id);
  bonLivraison.client = req.body.client;
  bonLivraison.date = req.body.date;
  bonLivraison.produits = req.body.produits;
  bonLivraison.montant = req.body.montant;
  await bonLivraison.save();

  res.redirect("/gescom-compta/bons-livraison");
});

// Supprime un bon de livraison
router.delete("/:id", async (req, res) => {
  await BonLivraison.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
