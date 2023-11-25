const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  code: { type: String, required: true, minLength: 3, maxLength: 20 },
  designation: { type: String, required: true },
  prixUnitaire: { type: Number, required: true },
  stock: { type: Number, required: true },
  categorie: { type: String, required: true },
});

module.exports = mongoose.model("Produit", produitSchema);
