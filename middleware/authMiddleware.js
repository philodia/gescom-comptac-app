const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "my-secret-key";

const authMiddleware = (req, res, next) => {
  // Récupère le jeton d'authentification
  const token = req.cookies.get("auth_token");

  // Si le jeton est vide, renvoie une erreur
  if (!token) {
    return res.status(401).send("Accès refusé");
  }

  // Vérifie la validité du jeton
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    req.auth = decodedToken;
    next();
  } catch (err) {
    return res.status(401).send("Accès refusé");
  }
};

module.exports = authMiddleware;
