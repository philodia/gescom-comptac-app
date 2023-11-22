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

const Utilisateur = mongoose.model('Utilisateur', UtilisateurSchema);

// Route de connexion
router.post('/login', async (req, res) => {
  // Récupération des données de connexion
  const email = req.body.email;
  const motDePasse = req.body.motDePasse;
  const type = req.body.type;

  // Recherche de l'utilisateur
  const utilisateur = await Utilisateur.findOne({ email });

  // Vérification des données de connexion
  if (!utilisateur) {
    res.status(401).send({
      message: 'L\'utilisateur n\'existe pas.',
    });
    return;
  }

  // Vérification du mot de passe
  const motDePasseCorrect = await bcrypt.compare(motDePasse, utilisateur.motDePasse);
  if (!motDePasseCorrect) {
    res.status(401).send({
      message: 'Le mot de passe est incorrect.',
    });
    return;
  }

  // Connexion de l'utilisateur
  req.session.utilisateur = utilisateur;

  // Envoi de la réponse
  res.json(utilisateur);
});

module.exports = router;
