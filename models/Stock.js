const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  quantite: { type: Number, required: true },
  prixUnitaire: { type: Number, required: true },
});

const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;
