const express = require("express");
const Facture = require("./models/Facture");

const factureController = express.Router();

factureController.get("/", async (req, res) => {
  const factures = await Facture.find();
  res.json(factures);
});

factureController.get("/:id", async (req, res) => {
  const facture = await Facture.findById(req.params.id);
  res.json(facture);
});

factureController.post("/", async (req, res) => {
  const facture = new Facture({
    date: req.body.date,
    client: req.body.client,
    bonLivraison: req.body.bonLivraison,
    total: req.body.total,
  });

  await facture.save();
  res.json(facture);
});

module.exports = factureController;
