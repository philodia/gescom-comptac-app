const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Connexion à la base de données MongoDB
mongoose.connect(
  process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Création du modèle Utilisateur
const UtilisateurSchema = new mongoose.Schema({
  id: Number,
  nom: String,
  prénom: String,
  email: String,
  motDePasse: String,
  type: String, // gescom ou compta
});

//const Utilisateur = mongoose.model('Utilisateur', UtilisateurSchema);

// Route de gestion de la comptabilité
router.get('/', (req, res) => {
  // Récupération de l'utilisateur connecté
  const utilisateur = req.session.utilisateur;

  // Envoi de la réponse
  res.send({
    message: 'Bienvenue sur la page de gestion de la comptabilité',
  });
});

module.exports = router;
