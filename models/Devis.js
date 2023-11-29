const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DevisSchema = new Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  date: { type: Date, required: true },
  numero: { type: String, required: true },
  description: { type: String, required: true },
  montant: { type: Number, required: true },
  status: { type: String, required: true },
});

DevisSchema.set("timestamps", true);
DevisSchema.set("collection", "devis");

module.exports = mongoose.model("Devis", DevisSchema);
