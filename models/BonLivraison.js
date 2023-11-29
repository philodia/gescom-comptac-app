const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BonLivraisonSchema = new Schema({
  // Champs du modèle
  numero: { type: String, required: true },
  date: { type: Date, required: true },
  client: { type: Schema.Types.ObjectId, ref: "Client" },
  produits: [{
    id: { type: String, required: true },
    quantite: { type: Number, required: true },
    prixUnitaire: { type: Number, required: true },
  }],
  total: { type: Number, required: true },

  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const BonLivraison = mongoose.model("BonLivraison", BonLivraisonSchema);

module.exports = BonLivraison;
