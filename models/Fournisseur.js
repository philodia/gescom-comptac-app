const mongoose = require("mongoose");

const fournisseurSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  nom: { type: String, required: true, minLength: 3, maxLength: 50 },
  adresse: { type: String, required: true, minLength: 10, maxLength: 100 },
  telephone: { type: String, required: true, minLength: 10, maxLength: 15 },
  email: { type: String, required: true, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
  contact: { type: String, required: true, minLength: 3, maxLength: 50 },
});

module.exports = mongoose.model("Fournisseur", fournisseurSchema);
