const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

// Authentifie l'utilisateur et stocke ses informations dans la session
router.post("/", (req, res) => {
  const data = req.body;

  const user = User.findOne({
    email: data.email,
    password: data.password,
  });

  if (!user) {
    res.status(401).send("Identifiant ou mot de passe incorrect");
    return;
  }

  req.session.user = user;

  res.status(200).send({
    message: "Connexion réussie",
  });
});

// Déconnecte l'utilisateur et supprime ses informations de la session
router.delete("/", (req, res) => {
  req.session.destroy();

  res.status(200).send({
    message: "Déconnexion réussie",
  });
});

module.exports = router;
