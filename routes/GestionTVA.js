const express = require("express");
const router = express.Router();
const { Tva } = require("../models/GestionTVA");

// Affiche la page de gestion de la TVA
router.get("/", (req, res) => {
  const user = req.user;

  res.render("gestion-tva", {
    user: user,
  });
});

// Crée une nouvelle TVA
router.post("/tva/nouvelle", async (req, res) => {
  const user = req.user;

  const tva = new Tva({
    taux: req.body.taux,
  });
  tva.user = user;
  await tva.save();

  res.redirect("/gescom-compta/gestion-tva");
});

// Affiche une TVA
router.get("/tva/:id", async (req, res) => {
  const user = req.user;

  const tva = await Tva.findById(req.params.id);

  res.render("tva", {
    user: user,
    tva: tva,
  });
});

// Met à jour une TVA
router.put("/tva/:id", async (req, res) => {
  const user = req.user;

  const tva = await Tva.findById(req.params.id);
  tva.taux = req.body.taux;
  await tva.save();

  res.redirect("/gescom-compta/gestion-tva");
});

// Supprime une TVA
router.delete("/tva/:id", async (req, res) => {
  const user = req.user;

  await Tva.findByIdAndDelete(req.params.id);

  res.sendStatus(200);
});

// Affiche la liste des TVA
router.get("/tvas", async (req, res) => {
  const user = req.user;

  const tvas = await Tva.find({
    user: user,
  });

  res.render("tvas", {
    user: user,
    tvas: tvas,
  });
});

module.exports = router;
