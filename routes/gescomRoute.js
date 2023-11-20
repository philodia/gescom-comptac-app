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
  res.render('gescom.js', {
    compta,
  });
});

router.get('/clients', (req, res) => {
  // Vérifier si l'utilisateur est authentifié
  if (!req.session.user) {
    res.redirect('/login');
    return;
  }

  // Obtenir les données des clients
  const clients = db.Client.find();

  // Afficher les données des clients
  res.render('clients.js', {
    clients,
  });
});

router.get('/fournisseurs', (req, res) => {
  // Vérifier si l'utilisateur est authentifié
  if (!req.session.user) {
    res.redirect('/login');
    return;
  }

  // Obtenir les données des fournisseurs
  const fournisseurs = db.Fournisseur.find();

  // Afficher les données des fournisseurs
  res.render('fournisseurs.js', {
    fournisseurs,
  });
});

module.exports = router;
