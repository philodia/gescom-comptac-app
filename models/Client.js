const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  adresse: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
});

module.exports = mongoose.model("Client", clientSchema);
