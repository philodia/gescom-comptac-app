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

// Route d'enregistrement
router.post('/register', async (req, res) => {
  // Récupération des données d'enregistrement
  const nom = req.body.nom;
  const prénom = req.body.prénom;
  const email = req.body.email;
  const motDePasse = req.body.motDePasse;
  const type = req.body.type;

  // Vérification de la disponibilité de l'email
  const utilisateurExistant = await Utilisateur.findOne({ email });
  if (utilisateurExistant) {
    res.status(409).send({
      message: 'L\'adresse e-mail est déjà utilisée.',
    });
    return;
  }

  // Cryptage du mot de passe
  const motDePasseHashé = await bcrypt.hash(motDePasse, 10);

  // Création de l'utilisateur
  const utilisateur = new Utilisateur({
    nom,
    prénom,
    email,
    motDePasse: motDePasseHashé,
    type,
  });

  // Enregistrement de l'utilisateur
  await utilisateur.save();

  // Envoi de la réponse
  res.json({
    message: 'L\'enregistrement a réussi.',
  });
});

module.exports = router;
