const mongoose = require('mongoose');

const devisSchema = new mongoose.Schema({
  id: { type: String, required: true },
  client: { type: String, required: true },
  date: { type: Date, required: true },
  produits: [{
    id: { type: String, required: true },
    designation: { type: String, required: true },
    prixUnitaire: { type: Number, required: true },
    quantite: { type: Number, required: true },
    remise: { type: Number, required: true },
    montant: { type: Number, required: true },
  }],
  totalHT: { type: Number, required: true },
  TVA: { type: Number, required: true },
  totalTTC: { type: Number, required: true },
});



module.exports = mongoose.model('Devis', devisSchema);
