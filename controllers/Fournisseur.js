const express = require("express");
const Fournisseur = require("./models/Fournisseur");

const fournisseurController = express.Router();

fournisseurController.get("/", async (req, res) => {
  const fournisseurs = await Fournisseur.find();
  res.json(fournisseurs);
});

fournisseurController.get("/:id", async (req, res) => {
  const fournisseur = await Fournisseur.findById(req.params.id);
  res.json(fournisseur);
});

fournisseurController.post("/", async (req, res) => {
  const fournisseur = new Fournisseur({
    nom: req.body.nom,
    adresse: req.body.adresse,
    telephone: req.body.telephone,
    email: req.body.email,
  });

  await fournisseur.save();
  res.json(fournisseur);
});

fournisseurController.put("/:id", async (req, res) => {
  const fournisseur = await Fournisseur.findByIdAndUpdate(
    req.params.id,
    {
      nom: req.body.nom,
      adresse: req.body.adresse,
      telephone: req.body.telephone,
      email: req.body.email,
    },
    {
      new: true,
    }
  );
  res.json(fournisseur);
});

fournisseurController.delete("/:id", async (req, res) => {
  await Fournisseur.deleteOne({ _id: req.params.id });
  res.status(204).send();
});

module.exports = fournisseurController;
