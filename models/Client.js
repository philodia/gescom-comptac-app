const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  codePostal: {
    type: String,
    required: true,
  },
  ville: {
    type: String,
    required: true,
  },
  pays: {
    type: String,
    required: true,
  },
  tva: {
    type: String,
    required: true,
  },
  bonLivraisons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "BonLivraison",
  }],
  devis: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Devis",
  }],
  factures: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Facture",
  }],
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
