const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models/User");

// Authentification
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send("Utilisateur non trouvé");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).send("Mot de passe incorrect");
  }

  const token = user.generateToken();
  res.cookie("auth-token", token, { expires: new Date(Date.now() + 60 * 60 * 24 * 30) });
  res.send({ token });
});

// Inscription
router.post("/inscription", async (req, res) => {
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const email = req.body.email;
  const password = req.body.password;

  const hash = await bcrypt.hash(password, 10);

  const user = new User({
    nom,
    prenom,
    email,
    password: hash,
  });
  await user.save();

  const token = user.generateToken();
  res.cookie("auth-token", token, { expires: new Date(Date.now() + 60 * 60 * 24 * 30) });
  res.send({ token });
});

// Déconnexion
router.get("/deconnexion", (req, res) => {
  res.clearCookie("auth-token");
  res.sendStatus(200);
});

module.exports = router;
