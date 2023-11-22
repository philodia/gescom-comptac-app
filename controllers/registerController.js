const express = require('express');
const router = express.Router();
const Register = require('../models/RegisterModel');
const bcrypt = require('bcryptjs');

// Route de l'inscription
router.post('/', (req, res) => {
  // Récupération des informations d'inscription
  const nom = req.body.nom;
  const prénom = req.body.prénom;
  const email = req.body.email;
  const motDePasse = req.body.motDePasse;
  const type = req.body.type;

  // Vérification de l'existence de l'email
  const login = Register.findOne({ email });

  // Si l'email existe déjà, erreur 409
  if (login) {
    return res.status(409).send('L\'email est déjà utilisé');
  }

  // Hachage du mot de passe
  const hashedPassword = bcrypt.hashSync(motDePasse, 10);

  // Création de l'utilisateur
  const register = new Register({
    nom,
    prénom,
    email,
    hashedPassword,
    type,
  });

  // Enregistrement de l'utilisateur dans la base de données
  register.save((err, register) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Envoi d'un e-mail de confirmation
    // ...

    // Redirection vers la page de connexion
    res.redirect('/login');
  });
});

module.exports = router;
