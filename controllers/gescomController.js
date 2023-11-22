const express = require('express');
const router = express.Router();
const Gescom = require('../models/GescomModel');

// Route de la liste des transactions
router.get('/', (req, res) => {
  // Récupération des informations de l'entreprise
  const gescom = Gescom.findOne();

  // Affichage des informations de l'entreprise
  res.send(gescom);
});

// Route de la modification des informations de l'entreprise
router.put('/', (req, res) => {
  // Récupération des informations de l'entreprise
  const gescom = Gescom.findOne();

  // Mise à jour des informations de l'entreprise
  gescom.nom = req.body.nom;
  gescom.adresse = req.body.adresse;
  gescom.telephone = req.body.telephone;
  gescom.email = req.body.email;
  gescom.logo = req.body.logo;

  // Enregistrement des informations de l'entreprise dans la base de données
  gescom.save((err, gescom) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Redirection vers la page de liste des transactions
    res.redirect('/gescom');
  });
});

module.exports = router;
