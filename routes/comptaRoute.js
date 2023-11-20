const express = require('express');
const router = express.Router();

const db = require('../config/db');

router.get('/', (req, res) => {
  // Vérifier si l'utilisateur est authentifié
  if (!req.session.user) {
    res.redirect('/login');
    return;
  }

  // Obtenir les données de la comptabilité
  const compta = db.Compta.findOne();

  // Afficher les données de la comptabilité
  res.render('compta.js', {
    compta,
  });
});

module.exports = router;
