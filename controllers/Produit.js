const express = require("express");
const Produit = require("./models/Produit");

const produitController = express.Router();

produitController.get("/", async (req, res) => {
  const produits = await Produit.find();
  res.json(produits);
});

produitController.get("/:id", async (req, res) => {
  const produit = await Produit.findById(req.params.id);
  res.json(produit);
});

produitController.post("/", async (req, res) => {
  const produit = new Produit({
    code: req.body.code,
    designation: req.body.designation,
    prixUnitaire: req.body.prixUnitaire,
    stock: req.body.stock,
    categorie: req.body.categorie,
  });

  await produit.save();
  res.json(produit);
});

produitController.put("/:id", async (req, res) => {
  const produit = await Produit.findByIdAndUpdate(
    req.params.id,
    {
      code: req.body.code,
      designation: req.body.designation,
      prixUnitaire: req.body.prixUnitaire,
      stock: req.body.stock,
      categorie: req.body.categorie,
    },
    {
      new: true,
    }
  );
  res.json(produit);
});

produitController.delete("/:id", async (req, res) => {
  await Produit.deleteOne({ _id: req.params.id });
  res.status(204).send();
});

module.exports = produitController;
