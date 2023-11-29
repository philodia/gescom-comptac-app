const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FactureSchema = new Schema({
  numero: { type: Number, required: true },
  date: { type: Date, required: true },
  client: { type: Schema.Types.ObjectId, ref: "Client" },
  produits: [
    {
      id: { type: Number, required: true },
      quantite: { type: Number, required: true },
      prixUnitaire: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
});

FactureSchema.pre("save", async (next) => {
  const facture = this;

  if (!facture.numero) {
    facture.numero = Math.floor(Math.random() * 1000000);
  }

  next();
});

module.exports = mongoose.model("Facture", FactureSchema);
