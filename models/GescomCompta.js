const mongoose = require("mongoose");

const gescomComptaSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  version: { type: Number, required: true },
});

module.exports = mongoose.model("GescomCompta", gescomComptaSchema);
