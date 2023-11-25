const express = require("express");
const Devis = require("./models/Devis");

const devisController = express.Router();

devisController.get("/", async (req, res) => {
  const devis = await Devis.find();
  res.json(devis);
});

devisController.get("/:id", async (req, res) => {
  const devis = await Devis.findById(req.params.id);
  res.json(devis);
});

devisController.post("/", async (req, res) => {
  const devis = new Devis({
    date: req.body.date,
    client: req.body.client,
    produits: req.body.produits,
    total: req.body.total,
  });

  await devis.save();
  res.json(devis);
});

module.exports = devisController;
