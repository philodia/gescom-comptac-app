const express = require("express");
const router = express.Router();
const SecuriteConfidentialite = require("../models/SecuriteConfidentialite");

// Affiche la page de gestion de la sécurité et de la confidentialité
router.get("/", (req, res) => {
  const user = req.user;

  res.render("securite-confidentialite", {
    user: user,
  });
});

// Modifie le mot de passe
router.post("/mot-de-passe", async (req, res) => {
  const user = req.user;

  const ancienMotDePasse = req.body.ancienMotDePasse;
  const nouveauMotDePasse = req.body.nouveauMotDePasse;

  if (!user.comparePassword(ancienMotDePasse)) {
    res.status(401).send("Mot de passe incorrect");
    return;
  }

  user.password = nouveauMotDePasse;
  await user.save();

  res.redirect("/gescom-compta/securite-confidentialite");
});

// Génère un nouveau mot de passe
router.get("/nouveau-mot-de-passe", async (req, res) => {
  const user = req.user;

  const nouveauMotDePasse = await user.generateNewPassword();

  res.render("nouveau-mot-de-passe", {
    user: user,
    nouveauMotDePasse: nouveauMotDePasse,
  });
});

// Modifie les paramètres de sécurité
router.post("/parametres-securite", async (req, res) => {
  const user = req.user;

  user.deuxFacteursAuthentification = req.body.deuxFacteursAuthentification;
  user.motDePasseExpiration = req.body.motDePasseExpiration;
  await user.save();

  res.redirect("/gescom-compta/securite-confidentialite");
});

module.exports = router;
