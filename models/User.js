const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  role: {
    type: String,
    enum: ["gescom", "compta"],
  },
});

// Modèle User
users: [Client]

// Modèle Client
userId: ObjectId

// Modèle Produit
userId: ObjectId

// Modèle Commande
userId: ObjectId

// Modèle Facture
clientId: ObjectId

// Modèle Paiement
factureId: ObjectId

// Modèle Compte
userId: ObjectId

const User = mongoose.model("User", UserSchema);

module.exports = User;
