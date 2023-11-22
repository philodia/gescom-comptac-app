const express = require('express');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Récupération du jeton d'authentification
  const token = req.headers['Authorization'];

  // Si le jeton n'existe pas, erreur 401
  if (!token) {
    return res.status(401).send('Vous devez être connecté pour accéder à cette ressource');
  }

  // Désérialisation du jeton
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Si le jeton est valide, mise à jour du contexte
    req.user = decoded.user;

    // Redirection vers la prochaine étape
    next();
  } catch (err) {
    // Si le jeton est invalide, erreur 401
    return res.status(401).send('Le jeton d\'authentification est invalide');
  }
};

module.exports = authMiddleware;
