const mongoose = require("mongoose");

const ProduitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String },
  prix: { type: Number, required: true },
  quantite: { type: Number, required: true },
  image: { type: String },
  categorie: { type: String },
});

ProduitSchema.set("timestamps", true);
ProduitSchema.set("collection", "produits");

module.exports = mongoose.model("Produit", ProduitSchema);
