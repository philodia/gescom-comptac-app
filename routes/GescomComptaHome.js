const express = require("express");
const router = express.Router();
const { User } = require("../models/GescomComptaHome");

// Affiche la page d'accueil de Gescom ou de Compta
router.get("/", (req, res) => {
  const user = req.session.user;

  if (!user) {
    res.status(401).send("Vous devez être connecté");
    return;
  }

  const authType = req.query.authType;

  if (!authType) {
    res.status(400).send("L'argument authType est obligatoire");
    return;
  }

  if (authType === "gescom") {
    res.render("gescom-home", {
      user: user,
    });
  } else if (authType === "compta") {
    res.render("compta-home", {
      user: user,
    });
  } else {
    res.status(403).send("Vous n'avez pas le droit d'accéder à cette ressource");
    return;
  }
});

// Traite la connexion
router.post("/connexion", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({
    email: email,
  });

  if (!user) {
    res.status(401).send("Utilisateur non trouvé");
    return;
  }

  if (!user.comparePassword(password)) {
    res.status(401).send("Mot de passe incorrect");
    return;
  }

  req.session.user = user;

  res.redirect("/");
});

// Traite la déconnexion
router.get("/deconnexion", (req, res) => {
  req.session.destroy();

  res.redirect("/");
});

// Affiche la page d'inscription
router.get("/inscription", (req, res) => {
  res.render("inscription", {});
});

// Traite l'inscription
router.post("/inscription", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const nom = req.body.nom;
  const prenom = req.body.prenom;

  const user = new User({
    email: email,
    password: password,
    nom: nom,
    prenom: prenom,
  });

  await user.save();

  req.session.user = user;

  res.redirect("/");
});

module.exports = router;
