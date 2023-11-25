const mongoose = require("mongoose");

const bonLivraisonSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  date: { type: Date, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  produits: { type: Array, of: { type: mongoose.Schema.Types.ObjectId, ref: "Produit" }, required: true },
  total: { type: Number, required: true },
});

module.exports = mongoose.model("BonLivraison", bonLivraisonSchema);
