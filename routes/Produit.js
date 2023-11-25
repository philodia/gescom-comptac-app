const express = require("express");
const router = express.Router();
const { User, Client, Produit, Devis, Fournisseur } = require("../models/Produit");

// Affiche la page de création d'un produit
router.get("/nouvelle", (req, res) => {
  const user = req.user;

  res.render("produit-nouvelle", {
    user: user,
  });
});

// Crée un nouveau produit
router.post("/nouvelle", async (req, res) => {
  const user = req.user;

  const produit = new Produit({
    nom: req.body.nom,
    prix: req.body.prix,
    stock: req.body.stock,
  });
  await produit.save();

  res.redirect("/gescom-compta/produits");
});

// Récupère un produit par son ID
router.get("/:id", async (req, res) => {
  const produit = await Produit.findById(req.params.id);
  res.json(produit);
});

// Met à jour un produit
router.put("/:id", async (req, res) => {
  const produit = await Produit.findById(req.params.id);
  produit.nom = req.body.nom;
  produit.prix = req.body.prix;
  produit.stock = req.body.stock;
  await produit.save();

  res.redirect("/gescom-compta/produits");
});

// Supprime un produit
router.delete("/:id", async (req, res) => {
  await Produit.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
