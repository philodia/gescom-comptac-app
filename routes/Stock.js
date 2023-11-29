const express = require("express");
const router = express.Router();
const { Stock } = require("../models/Stock");
const { Produit } = require("../models/Produit");

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
    produit: data.produit,
    quantite: data.quantite,
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

  stock.produit = data.produit || stock.produit;
  stock.quantite = data.quantite || stock.quantite;

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

// Liste des produits d'un stock
router.get("/:id/produits", async (req, res) => {
  const id = req.params.id;

  const stock = await Stock.findById(id);

  if (!stock) {
    res.status(404).send("Stock non trouvé");
    return;
  }

  const produits = await Produit.find({
    _id: { $in: stock.produits }
  });

  res.json(produits);
});

module.exports = router;
