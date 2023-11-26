const express = require("express");
const CompteBancaire = require("./models/CompteBancaire");

const CompteBancaireController = express.Router();

CompteBancaireController.get("/", async (req, res) => {
  const comptesBancaires = await CompteBancaire.find();
  res.json(comptesBancaires);
});

CompteBancaireController.get("/:id", async (req, res) => {
  const compteBancaire = await CompteBancaire.findById(req.params.id);
  res.json(compteBancaire);
});

CompteBancaireController.post("/", async (req, res) => {
  const compteBancaire = new CompteBancaire({
    numero: req.body.numero,
    banque: req.body.banque,
    cleRib: req.body.cleRib,
  });

  await compteBancaire.save();
  res.json(compteBancaire);
});

module.exports = CompteBancaireController;
