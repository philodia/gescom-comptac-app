const express = require("express");
const Stock = require("./models/Stock");

const StockController = express.Router();

StockController.get("/", async (req, res) => {
  const stocks = await Stock.find();
  res.json(stocks);
});

StockController.get("/:id", async (req, res) => {
  const stock = await Stock.findById(req.params.id);
  res.json(stock);
});

StockController.post("/", async (req, res) => {
  const stock = new Stock({
    produit: req.body.produit,
    quantite: req.body.quantite,
    seuil: req.body.seuil,
  });

  await stock.save();
  res.json(stock);
});

module.exports = StockController;
