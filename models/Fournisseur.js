const mongoose = require("mongoose");

// Modèle Fournisseur
const FournisseurSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String },
  email: { type: String },
  telephone: { type: String },
  adresse: { type: String },
  logo: { type: String },
});

const Fournisseur = mongoose.model("Fournisseur", FournisseurSchema);

module.exports = Fournisseur;
