const mongoose = require("mongoose");

const fournisseurSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  adresse: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
});

const Fournisseur = mongoose.model("Fournisseur", fournisseurSchema);

module.exports = Fournisseur;