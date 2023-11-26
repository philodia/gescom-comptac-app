const mongoose = require("mongoose");

const securiteConfidentialiteSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  motDePasseMinimal: { type: String, required: true },
  motDePasseExpiration: { type: Number, required: true },
  connexionsMultiples: { type: Boolean, required: true },
  authentificationA2F: { type: Boolean, required: true },
});

module.exports = mongoose.model("SecuriteConfidentialite", securiteConfidentialiteSchema);
