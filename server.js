// server.js
const express = require("express");
const app = express();
const path = require('path');
//const bodyParser = require('body-parser');
//const cors = require('cors');
//const mongoose = require("mongoose");
//const routes = require('./routes');
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const homeRoute = require("./routes/homeRoute");
const authMiddleware = require("./middleware/authMiddleware");

// Charge le middleware d'authentification
app.use(authMiddleware);

// Charge le routeur de la page d'accueil
//app.get('/homeRoute', async (req, res));
  
// Route accessible uniquement aux utilisateurs authentifiés
app.get("/protected", (req, res) => {
  // Vérifie que l'utilisateur est authentifié
  if (!req.auth) {
    return res.status(401).send("Accès refusé");
  }
 // L'utilisateur est authentifié, on peut lui renvoyer la réponse
  res.send("Vous êtes authentifié !");
});





// Gère les requêtes GET vers la route /api
app.get("/api", (req, res) => {
    res.json({ message: "Hello libasse!" });
  });

 // route
http://localhost:5000/auth*
  //const authRoute = require('./authController');
    //app.use("/auth", authRoute);
 

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT || 5000}`);
});