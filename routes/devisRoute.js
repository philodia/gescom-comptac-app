const express = require('express');
const router = express.Router();
const Devis = require('../models/Devis');

router.get('/', (req, res) => {
  const devis = Devis.find();
  res.json(devis);
});

router.post('/', (req, res) => {
  const devis = new Devis({
    client: req.body.client,
    date: new Date(),
    produits: req.body.produits,
  });

  devis.save((err, devis) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(devis);
    }
  });
});

router.get('/:id', (req, res) => {
  const devis = Devis.findOne({ id: req.params.id });
  res.json(devis);
});

router.put('/:id', (req, res) => {
  const devis = Devis.findOne({ id: req.params.id });

  devis.client = req.body.client;
  devis.date = req.body.date;
  devis.produits = req.body.produits;

  devis.save((err, devis) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(devis);
    }
  });
});

router.delete('/:id', (req, res) => {
  Devis.deleteOne({ id: req.params.id }, (err, devis) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(devis);
    }
  });
});

module.exports = router;
