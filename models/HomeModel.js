const mongoose = require('mongoose');

// Création du schéma de données
const HomeSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  contenu: { type: String, required: true },
});

// Création du modèle
const Home = mongoose.model('Home', HomeSchema);

module.exports = Home;
