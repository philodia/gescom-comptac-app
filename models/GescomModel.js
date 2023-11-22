const mongoose = require('mongoose');

// Création du schéma de données
const GescomSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  adresse: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
  logo: { type: String, required: true },
});

// Création du modèle
const Gescom = mongoose.model('Gescom', GescomSchema);

module.exports = Gescom;
