const express = require("express");
const router = express.Router();
const fonctionnalitesComptables = require("../models/FonctionnalitesComptables");

// Affiche la page de gestion des fonctionnalités comptables
router.get("/", (req, res) => {
  const user = req.user;

  res.render("fonctionnalites-comptables", {
    user: user,
  });
});

// Crée une nouvelle écriture comptable
router.post("/ecriture-comptable/nouvelle", async (req, res) => {
  const user = req.user;

  const ecritureComptable = new EcritureComptable({
    date: req.body.date,
    numero: req.body.numero,
    libellé: req.body.libelle,
    montant: req.body.montant,
    compteDebiteur: req.body.compteDebiteur,
    compteCrediteur: req.body.compteCrediteur,
  });
  ecritureComptable.user = user;
  await ecritureComptable.save();

  res.redirect("/gescom-compta/fonctionnalites-comptables");
});

// Affiche une écriture comptable
router.get("/ecriture-comptable/:id", async (req, res) => {
  const user = req.user;

  const ecritureComptable = await EcritureComptable.findById(req.params.id);

  res.render("ecriture-comptable", {
    user: user,
    ecritureComptable: ecritureComptable,
  });
});

// Met à jour une écriture comptable
router.put("/ecriture-comptable/:id", async (req, res) => {
  const user = req.user;

  const ecritureComptable = await EcritureComptable.findById(req.params.id);
  ecritureComptable.date = req.body.date;
  ecritureComptable.numero = req.body.numero;
  ecritureComptable.libelle = req.body.libelle;
  ecritureComptable.montant = req.body.montant;
  ecritureComptable.compteDebiteur = req.body.compteDebiteur;
  ecritureComptable.compteCrediteur = req.body.compteCrediteur;
  await ecritureComptable.save();

  res.redirect("/gescom-compta/fonctionnalites-comptables");
});

// Supprime une écriture comptable
router.delete("/ecriture-comptable/:id", async (req, res) => {
  const user = req.user;

  await EcritureComptable.findByIdAndDelete(req.params.id);

  res.sendStatus(200);
});

// Affiche la liste des écritures comptables
router.get("/ecritures-comptables", async (req, res) => {
  const user = req.user;

  const ecrituresComptables = await EcritureComptable.find({
    user: user,
  });

  res.render("ecritures-comptables", {
    user: user,
    ecrituresComptables: ecrituresComptables,
  });
});

module.exports = router;
