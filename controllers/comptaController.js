const express = require('express');
const router = express.Router();
const Compta = require('../models/ComptaModel');

// Route de la liste des transactions
router.get('/', (req, res) => {
  // Récupération des transactions
  const transactions = Compta.find();

  // Affichage des transactions
  res.send(transactions);
});

// Route de la création d'une transaction
router.post('/', (req, res) => {
  // Récupération des informations de la transaction
  const date = req.body.date;
  const libelle = req.body.libelle;
  const debit = req.body.debit;
  const credit = req.body.credit;

  // Création de la transaction
  const transaction = new Compta({
    date,
    libelle,
    debit,
    credit,
  });

  // Enregistrement de la transaction dans la base de données
  transaction.save((err, transaction) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Redirection vers la page de liste des transactions
    res.redirect('/compta');
  });
});

// Route de la modification d'une transaction
router.put('/:id', (req, res) => {
  // Récupération des informations de la transaction
  const date = req.body.date;
  const libelle = req.body.libelle;
  const debit = req.body.debit;
  const credit = req.body.credit;

  // Récupération de la transaction
  const transaction = Compta.findById(req.params.id);

  // Mise à jour de la transaction
  transaction.date = date;
  transaction.libelle = libelle;
  transaction.debit = debit;
  transaction.credit = credit;

  // Enregistrement de la transaction dans la base de données
  transaction.save((err, transaction) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Redirection vers la page de liste des transactions
    res.redirect('/compta');
  });
});

// Route de la suppression d'une transaction
router.delete('/:id', (req, res) => {
  // Récupération de la transaction
  const transaction = Compta.findById(req.params.id);

  // Suppression de la transaction dans la base de données
  transaction.remove((err) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Redirection vers la page de liste des transactions
    res.redirect('/compta');
  });
});

module.exports = router;
