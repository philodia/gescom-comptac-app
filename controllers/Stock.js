const express = require("express");
const router = express.Router();
const { Stock } = require("../models/Stock");

// Affiche la liste des stocks
router.get("/", async (req, res) => {
  const stocks = await Stock.find();

  res.json(stocks);
});

// Affiche les détails d'un stock
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const stock = await Stock.findById(id);

  if (!stock) {
    res.status(404).send("Stock non trouvé");
    return;
  }

  res.json(stock);
});

// Crée un nouveau stock
router.post("/", async (req, res) => {
  const data = req.body;

  const stock = new Stock({
    quantite: data.quantite,
    produit: data.produit,
  });

  await stock.save();

  res.status(201).send(stock);
});

// Modifie un stock
router.put("/:id", async (req, res) => {
  const id = req.params.id;

  const data = req.body;

  const stock = await Stock.findById(id);

  if (!stock) {
    res.status(404).send("Stock non trouvé");
    return;
  }

  stock.quantite = data.quantite || stock.quantite;
  stock.produit = data.produit || stock.produit;

  await stock.save();

  res.status(200).send(stock);
});

// Supprime un stock
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const stock = await Stock.findById(id);

  if (!stock) {
    res.status(404).send("Stock non trouvé");
    return;
  }

  await stock.delete();

  res.status(200).send();
});

// Affiche la liste des produits d'un stock
router.get("/:id/produits", async (req, res) => {
  const id = req.params.id;

  const stock = await Stock.findById(id);

  if (!stock) {
    res.status(404).send("Stock non trouvé");
    return;
  }

  const produits = await stock.getProduits();

  res.json(produits);
});

module.exports = router;
