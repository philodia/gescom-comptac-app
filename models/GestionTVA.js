const mongoose = require("mongoose");

const gestionTVASchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  taux: { type: Number, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("GestionTVA", gestionTVASchema);
