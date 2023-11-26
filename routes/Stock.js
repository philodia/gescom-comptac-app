const express = require("express");
const router = express.Router();
const { Stock } = require("../models/Stock");

// Affiche la page de gestion du stock
router.get("/", (req, res) => {
  const user = req.user;

  //const stocks = await Stock.find();

  res.render("stock", {
    user: user,
    produits: produits,
    stocks: stocks,
  });
});

// Ajoute un produit au stock
router.post("/produit/ajouter", async (req, res) => {
  const user = req.user;

  const produit = await Produit.findById(req.body.produit);
  const stock = new Stock({
    produit: produit,
    quantité: req.body.quantité,
  });
  stock.user = user;
  await stock.save();

  res.redirect("/gescom-compta/stock");
});

// Retire un produit du stock
router.post("/produit/retirer", async (req, res) => {
  const user = req.user;

  const stock = await Stock.findById(req.body.stock);
  const quantité = stock.quantité - req.body.quantité;
  if (quantité < 0) {
    res.status(400).send("La quantité demandée est supérieure à la quantité en stock");
  }

  stock.quantité = quantité;
  await stock.save();

  res.redirect("/gescom-compta/stock");
});

module.exports = router;
