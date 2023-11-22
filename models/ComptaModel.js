const mongoose = require('mongoose');

// Création du schéma de données
const ComptaSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  libelle: { type: String, required: true },
  debit: { type: Number, required: true },
  credit: { type: Number, required: true },
});

// Création du modèle
const Compta = mongoose.model('Compta', ComptaSchema);

module.exports = Compta;
