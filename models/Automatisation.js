const mongoose = require("mongoose");

const automatisationSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  parametres: { type: Object, required: true },
});

module.exports = mongoose.model("Automatisation", automatisationSchema);
