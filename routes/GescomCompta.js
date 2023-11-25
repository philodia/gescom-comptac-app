const express = require("express");
const router = express.Router();
const { User, Client, Produit, Devis, Facture } = require("../models/GescomCompta");

// Affiche la page de gestion de la comptabilité
router.get("/", (req, res) => {
  const user = req.user;

  res.render("gescom-compta", {
    user: user,
    devis: Devis.find({ client: user.id }),
    factures: Facture.find({ client: user.id }),
  });
});

module.exports = router;
