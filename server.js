// server.js
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const { User, GescomCompta, Client, Fournisseur, Produit, BonLivraison, Devis, Facture } = require("./models");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

// Configurer Express
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//mongoose.model('User', User);
mongoose.connect(
  process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Controllers
const userController = require("./controllers/User");
const gescomComptaController = require("./controllers/GescomCompta");
const clientController = require("./controllers/Client");
const fournisseurController = require("./controllers/Fournisseur");
const produitController = require("./controllers/Produit");
const devisController = require("./controllers/Devis");
const bonLivraisonController = require("./controllers/BonLivraison");
const factureController = require("./controllers/Facture");

{/*const userRoutes = userController.routes();
const gescomComptaRoutes = gescomComptaController.routes();
const clientRoutes = clientController.routes();
const fournisseurRoutes = fournisseurController.routes();
const produitRoutes = produitController.routes();
const devisRoutes = devisController.routes();
const bonLivraisonRoutes = bonLivraisonController.routes();
const factureRoutes = factureController.routes();

{/*}
app.use("/user", userRoutes);
app.use("/gescomCompta", gescomComptaRoutes);
app.use("/client", clientRoutes);
app.use("/fournisseur", fournisseurRoutes);
app.use("/produit", produitRoutes);
app.use("/devis", devisRoutes);
app.use("/bonLivraison", bonLivraisonRoutes);
app.use("/facture", factureRoutes);
*/}

//Models - Router
const HomeRouter = require("./routes/Home");
const User = require("./routes/User");
const GescomCompta = require("./routes/GescomCompta");
const Client = require("./routes/Client");
const Fournisseur = require("./routes/Fournisseur");
const Produit = require("./routes/Produit");
const Devis = require("./routes/Devis");
const BonLivraison = require("./routes/BonLivraison");
const Facture = require("./routes/Facture");

app.use("/", HomeRouter);
app.use("/gescom-compta/User", User);
app.use("/", GescomCompta);
app.use("/gescom-compta/client", Client);
app.use("/gescom-compta/fournisseur", Fournisseur);
app.use("/gescom-compta/produit", Produit);
app.use("/gescom-compta/devis", Devis);
app.use("/gescom-compta/bons-livraison", BonLivraison);
app.use("/gescom-compta/facture", Facture);

//Routes
const HomeRoute = require("./routes/Home");
const UserRoute = require("./routes/User");
const ClientRoute = require("./routes/Client");
const FournisseurRoute = require("./routes/Fournisseur");
const ProduitRoute = require("./routes/Produit");
const GescomComptaRoute = require("./routes/GescomCompta");
const DevisRoute = require("./routes/Devis");
const BonLivraisonRoute = require("./routes/BonLivraison");
const FactureRoute = require("./routes/Facture");

 // Routes
http://localhost:5000/auth/*
app.use("/home", HomeRoute);
app.use("/user", UserRoute);
 app.use("/client", ClientRoute);
 app.use("/fournisseur", FournisseurRoute);
 app.use("/produit", ProduitRoute);
 app.use("/gescomCompta", GescomComptaRoute);
 app.use("/devis", DevisRoute);
 app.use("/bonLivraison", BonLivraisonRoute);
 app.use("/facture", FactureRoute);

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT || 5000}`);
});