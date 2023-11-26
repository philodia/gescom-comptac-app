const mongoose = require("mongoose");

const rapportsAnalysesSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  date: { type: Date, required: true },
  donnees: { type: Object, required: true },
});

module.exports = mongoose.model("RapportsAnalyses", rapportsAnalysesSchema);
