const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

// Traite la connexion
router.post("/auth", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const authType = req.body.authType;

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
  req.session.authType = authType;

  res.json({
    user: user,
    authType: authType,
  });
});

// Déconnecte l'utilisateur
router.get("/deconnexion", (req, res) => {
  req.session.destroy();

  res.json({
    status: "success",
  });
});

module.exports = router;
