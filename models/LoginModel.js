const mongoose = require('mongoose');

// Création du schéma de données
const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  motDePasse: { type: String, required: true },
});

// Création du modèle
const Login = mongoose.model('Login', LoginSchema);

module.exports = Login;
