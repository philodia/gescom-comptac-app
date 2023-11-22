const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

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
});

// Route d'accueil
router.get('/', (req, res) => {
  // Récupération de l'utilisateur connecté
  const utilisateur = req.session.utilisateur;

  // Envoi de la réponse
  res.send('Bienvenue sur l\'application Gescom-Compta' + (utilisateur ? `, ${utilisateur.nom} ${utilisateur.prénom}` : ''));
});

module.exports = router;
