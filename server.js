// server.js
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
//const app = require('./index');
//const router = express.Router();
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

//mongoose.model('User', User);
mongoose.connect(
  process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Controllers
const User = require("./controllers/UserController");
const GescomComptaHome = require("./controllers/GescomComptaHome");
const Client = require("./controllers/Client");
const BonLivraison = require("./controllers/BonLivraison");
const Devis = require("./controllers/Devis");
const Produit = require("./controllers/Produit");
const Facture = require("./controllers/Facture");
const Fournisseur = require("./controllers/Fournisseur");

app.use("/gescom/compta/user", User);
app.use("/gescom/compta/gescomCompta", GescomComptaHome);
app.use("/gescom/compta/clients", Client);
app.use("/grscom/compta/bonlivraison", BonLivraison);
app.use("/gescom/compta/devis", Devis);
app,use("/gescom/compta/produit", Produit);
app.use("/gescom/compta/facture", Facture);
app.use("/gescom/compta/fournissuer", Fournisseur);
app.use("/gescom/compta/stocks", Stock);

//Models 
const User = require("./models/User");
const GescomComptaHome = require("./models/GescomComptaHome");
const Client = require("./models/Client");
const BonLivraison = require("./models/BonLivraison");
const Devis = require("./models/Devis");
const Produit = require('./models/Produit');
const Facture = require("./models/Facture");
const Fournisseur = require("./models/Fournisseur");
const Stock = require("./models/Stock");

// Créer la collection User
User.collection.createIndex("username", { unique: true });
GescomComptaHome.collection.createIndex("type", { unique: true });
Client.collection.createIndex("nom", { unique: true });

// Routes
const UserRoute = require("./routes/User");
const GescomComptaHomeRoute = require("./routes/GescomComptaHome");
const ClientRoute = require("./routes/Client");
const BonLivraisonRoute = require("./routes/BonLivraison");
const DevisRoute = require("./routes/Devis");
const FactureRoute = require("./routes/Facture");
const ProduitRoute = require("./routes/Produit");
const FournisseurRoute = requirre("./routes/Fournisseur.js");
const StockRoute = require("./routes/Stock");


// Configurer Express
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/api/gescom-compta', (req, res) => {
  res.json();
})

http://localhost:5000/*
app.use("/user", UserRoute);
app.use("/gescom-compta", GescomComptaHomeRoute);
app.use("/gescom/compta/clients", ClientRoute);
app.use("/gescom/compta/bonlivraisons", BonLivraisonRoute);
app.use("/gescom/compta/devis", DevisRoute);
app.use("/gescom/compta/factures", FactureRoute);
app.use("/gescom/compta/produits", ProduitRoute);
app.use("/gescom/compta/fournisseur", FournisseurRoute);

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server connecter au port ${process.env.PORT || 5000}`);
});

{/*// Mongoose relations
// Client
Client.schema.set("timestamps", true);
Client.schema.set("collection", "clients");

// BonLivraison
BonLivraison.schema.set("timestamps", true);
BonLivraison.schema.set("collection", "bonlivraisons");
BonLivraison.schema.add({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
});

// Devis
Devis.schema.set("timestamps", true);
Devis.schema.set("collection", "devis");
Devis.schema.add({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
});

// Facture
Facture.schema.set("timestamps", true);
Facture.schema.set("collection", "factures");
Facture.schema.add({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
});*/}