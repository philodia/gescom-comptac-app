const express = require("express");
const BonLivraison = require("./models/BonLivraison");

const bonLivraisonController = express.Router();

bonLivraisonController.get("/", async (req, res) => {
  const bonsDeLivraison = await BonLivraison.find();
  res.json(bonsDeLivraison);
});

bonLivraisonController.get("/:id", async (req, res) => {
  const bonDeLivraison = await BonLivraison.findById(req.params.id);
  res.json(bonDeLivraison);
});

bonLivraisonController.post("/", async (req, res) => {
  const bonDeLivraison = new BonLivraison({
    date: req.body.date,
    client: req.body.client,
    produits: req.body.produits,
    total: req.body.total,
  });

  await bonDeLivraison.save();
  res.json(bonDeLivraison);
});

module.exports = bonLivraisonController;
