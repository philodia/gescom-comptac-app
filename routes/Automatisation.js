const express = require("express");
const router = express.Router();
const { Automatisation } = require("../models/Automatisation");

// Affiche la page de gestion des automatisations
router.get("/", (req, res) => {
  const user = req.user;

  res.render("automatisation", {
    user: user,
  });
});

// Crée une nouvelle automatisation
router.post("/nouvelle-automatisation", async (req, res) => {
  const user = req.user;

  const automatisation = new Automatisation({
    nom: req.body.nom,
    description: req.body.description,
    evenement: req.body.evenement,
    condition: req.body.condition,
    action: req.body.action,
  });
  automatisation.user = user;
  await automatisation.save();

  res.redirect("/gescom-compta/automatisation");
});

// Affiche une automatisation
router.get("/automatisation/:id", async (req, res) => {
  const user = req.user;

  const automatisation = await Automatisation.findById(req.params.id);

  res.render("automatisation", {
    user: user,
    automatisation: automatisation,
  });
});

// Met à jour une automatisation
router.put("/automatisation/:id", async (req, res) => {
  const user = req.user;

  const automatisation = await Automatisation.findById(req.params.id);
  automatisation.nom = req.body.nom;
  automatisation.description = req.body.description;
  automatisation.evenement = req.body.evenement;
  automatisation.condition = req.body.condition;
  automatisation.action = req.body.action;
  await automatisation.save();

  res.redirect("/gescom-compta/automatisation");
});

// Supprime une automatisation
router.delete("/automatisation/:id", async (req, res) => {
  const user = req.user;

  await Automatisation.findByIdAndDelete(req.params.id);

  res.sendStatus(200);
});

// Affiche la liste des automatisations
router.get("/automatisations", async (req, res) => {
  const user = req.user;

  const automatisations = await Automatisation.find({
    user: user,
  });

  res.render("automatisations", {
    user: user,
    automatisations: automatisations,
  });
});

module.exports = router;
