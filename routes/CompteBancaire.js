const express = require("express");
const router = express.Router();
const { CompteBancaire } = require("../models/CompteBancaire");

// Affiche la page de création d'un compte bancaire
router.get("/nouvelle", (req, res) => {
  const user = req.user;

  res.render("compte-bancaire-nouvelle", {
    user: user,
  });
});

// Crée un nouveau compte bancaire
router.post("/nouvelle", async (req, res) => {
  const user = req.user;

  const compteBancaire = new CompteBancaire({
    titulaire: req.body.titulaire,
    numero: req.body.numero,
    banque: req.body.banque,
    IBAN: req.body.IBAN,
    BIC: req.body.BIC,
  });
  compteBancaire.user = user;
  await compteBancaire.save();

  res.redirect("/gescom-compta/comptes-bancaires");
});

// Récupère un compte bancaire par son ID
router.get("/:id", async (req, res) => {
  const compteBancaire = await CompteBancaire.findById(req.params.id);
  res.json(compteBancaire);
});

// Met à jour un compte bancaire
router.put("/:id", async (req, res) => {
  const compteBancaire = await CompteBancaire.findById(req.params.id);
  compteBancaire.titulaire = req.body.titulaire;
  compteBancaire.numero = req.body.numero;
  compteBancaire.banque = req.body.banque;
  compteBancaire.IBAN = req.body.IBAN;
  compteBancaire.BIC = req.body.BIC;
  await compteBancaire.save();

  res.redirect("/gescom-compta/comptes-bancaires");
});

// Supprime un compte bancaire
router.delete("/:id", async (req, res) => {
  await CompteBancaire.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
