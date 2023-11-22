const mongoose = require('mongoose');

// Création du schéma de données
const RegisterSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prénom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  motDePasse: { type: String, required: true },
  type: { type: String, required: true },
});

// Création du modèle
const Register = mongoose.model('Register', RegisterSchema);

module.exports = Register;
