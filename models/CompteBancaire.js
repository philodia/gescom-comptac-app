const mongoose = require("mongoose");

const compteBancaireSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  libelle: { type: String, required: true },
  numero: { type: String, required: true },
  bic: { type: String, required: true },
  iban: { type: String, required: true },
  banque: { type: String, required: true },
  devise: { type: String, required: true },
});

module.exports = mongoose.model("CompteBancaire", compteBancaireSchema);
