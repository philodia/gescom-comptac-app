const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  produit: { type: mongoose.Schema.Types.ObjectId, ref: "Produit", required: true },
  quantite: { type: Number, required: true },
  prixAchat: { type: Number, required: true },
  prixVente: { type: Number, required: true },
});

module.exports = mongoose.model("Stock", stockSchema);
