const mongoose = require("mongoose");

const fonctionnalitesComptablesSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  libelle: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
});

module.exports = mongoose.model("FonctionnalitesComptables", fonctionnalitesComptablesSchema);
