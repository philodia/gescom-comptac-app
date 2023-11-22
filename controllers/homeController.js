const express = require('express');
const router = express.Router();
const Home = require('../models/HomeModel');

// Route de la page d'accueil
router.get('/', (req, res) => {
  // Récupération des informations de la page d'accueil
  const home = Home.findOne();

  // Affichage des informations de la page d'accueil
  res.send(home);
});

module.exports = router;
