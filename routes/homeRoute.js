const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => {
  // Vérifie que l'utilisateur est authentifié
  if (!req.auth) {
    return res.status(401).send("Accès refusé");
  }

  // L'utilisateur est authentifié, on peut lui renvoyer la réponse
  const user = req.auth;

  res.send({
    message: "Bienvenue sur Gescom-Compta !",
    user,
  });
});

module.exports = router;
