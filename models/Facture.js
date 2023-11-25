const mongoose = require("mongoose");

const factureSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  date: { type: Date, required: true },
  client: { type: String, required: true },
  produit: { type: Array, required: true },
  total: { type: Number, required: true },
  etat: { type: String, required: true, enum: ["en attente", "payée", "annulée"] },
});

factureSchema.post("validate", function(document, next) {
  const produits = document.produit;
  if (!produits || produits.length === 0) {
    next(new Error("La facture doit contenir au moins un produit"));
  }
  for (const produit of produits) {
    if (!produit.code || produit.code.length === 0) {
      next(new Error("Le code du produit ne doit pas être vide"));
    }
    if (!produit.quantite || produit.quantite <= 0) {
      next(new Error("La quantité du produit doit être supérieure ou égale à 1"));
    }
    if (!produit.prix || produit.prix <= 0) {
      next(new Error("Le prix du produit doit être supérieur ou égal à 0"));
    }
  }
  next();
});

module.exports = mongoose.model("Facture", factureSchema);
