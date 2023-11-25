const express = require("express");
const router = express.Router();

// Affiche la page d'accueil
router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;
