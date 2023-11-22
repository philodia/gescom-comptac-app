const express = require('express');
const router = express.Router();
const Login = require('../models/LoginModel');
const bcrypt = require('bcryptjs');

// Route de la connexion
router.post('/', (req, res) => {
  // Récupération des informations de connexion
  const email = req.body.email;
  const motDePasse = req.body.motDePasse;

  // Vérification de l'existence de l'utilisateur
  const login = Login.findOne({ email });

  // Si l'utilisateur n'existe pas, erreur 404
  if (!login) {
    return res.status(404).send('Utilisateur non trouvé');
  }

  // Vérification du mot de passe
  const isPasswordValid = bcrypt.compareSync(motDePasse, login.motDePasse);

  // Si le mot de passe est incorrect, erreur 401
  if (!isPasswordValid) {
    return res.status(401).send('Mot de passe incorrect');
  }

  // Connexion de l'utilisateur
  req.session.login = login;

  // Redirection vers la page d'accueil
  res.redirect('/');
});

module.exports = router;
