// server.js
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
//const app = require('./index');
//const router = express.Router();
const mongoose = require("mongoose");
//const { Client, Fournisseur, Produit, BonLivraison, Devis, Facture } = require("./models");
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

{/*// Controllers
const UserController = require("./controllers/User");
const gescomComptaController = require("./controllers/GescomCompta");
const clientController = require("./controllers/Client");
const fournisseurController = require("./controllers/Fournisseur");
const produitController = require("./controllers/Produit");
const devisController = require("./controllers/Devis");
const bonLivraisonController = require("./controllers/BonLivraison");
const factureController = require("./controllers/Facture");
const compteBancaireController = require("./controllers/CompteBancaire");
const stockController = require("./controllers/Stock");
const rapportsAnalysesController = require("./controllers/RapportsAnalyses");
const fonctionsComptablesController = require("./controllers/FonctionnalitesComptables");
const gestionTVAController = require("./controllers/GestionTVA");
const securiteConfidentialiteController = require("./controllers/SecuriteConfidentialite");
const automatisationController = require("./controllers/Automatisation");

const userRoutes = UserController.routes();
const gescomComptaRoutes = gescomComptaController.routes();
const clientRoutes = clientController.routes();
const fournisseurRoutes = fournisseurController.routes();
const produitRoutes = produitController.routes();
const devisRoutes = devisController.routes();
const bonLivraisonRoutes = bonLivraisonController.routes();
const factureRoutes = factureController.routes();
const compteBancaireRoutes = compteBancaireController.routes();
const stockRoutes = stockController.routes();
const rapportsAnalysesRoutes = rapportsAnalysesController.routes();
const fonctionsComptablesRoutes = fonctionsComptablesController.routes();
const gestionTVARoutes = gestionTVAController.routes();
const securiteConfidentialiteRoutes = securiteConfidentialiteController.routes();
const automatisationRoutes = automatisationController.routes();

app.use("/user", userRoutes);
app.use("/gescomCompta", gescomComptaRoutes);
app.use("/client", clientRoutes);
app.use("/fournisseur", fournisseurRoutes);
app.use("/produit", produitRoutes);
app.use("/devis", devisRoutes);
app.use("/bonLivraison", bonLivraisonRoutes);
app.use("/facture", factureRoutes);
app.use("/compteBancaire", compteBancaireRoutes);
app.use("/stock", stockRoutes);
app.use("/rapportsAnalyses", rapportsAnalysesRoutes);
app.use("/fonctionnalitesComptables", fonctionsComptablesRoutes);
app.use("/gestionTVA", gestionTVARoutes);
app.use("/securiteConfidentialite", securiteConfidentialiteRoutes);
app.use("/automatisation", automatisationRoutes);

*/}


//Models - Router
const Home = require("./routes/Home");
const User = require("./routes/User");
const GescomCompta = require("./routes/GescomCompta");
const Client = require("./routes/Client");
const Fournisseur = require("./routes/Fournisseur");
const Produit = require("./routes/Produit");
const Devis = require("./routes/Devis");
const BonLivraison = require("./routes/BonLivraison");
const Facture = require("./routes/Facture");
const CompteBancaire = require("./routes/CompteBancaire");
const Stock = require("./routes/Stock");
const RapportsAnalyses = require("./routes/RapportsAnalyses");
const FonctionnalitesComptables = require("./routes/FonctionnalitesComptables");
const GestionTVA = require("./routes/GestionTVA");
const SecuriteConfidentialite = require("./routes/SecuriteConfidentialite");
const Automatisation = require("./routes/Automatisation");



app.use("/", Home);
app.use("/gescom-compta/User", User);
app.use("/", GescomCompta);
app.use("/gescom-compta/client", Client);
app.use("/gescom-compta/fournisseur", Fournisseur);
app.use("/gescom-compta/produit", Produit);
app.use("/gescom-compta/devis", Devis);
app.use("/gescom-compta/bons-livraison", BonLivraison);
app.use("/gescom-compta/facture", Facture);
app.use("/gescom-compta/comptes-bancaires", CompteBancaire);
app.use("/gescom-compta/stock", Stock);
app.use("/gescom-compta/rapports-analyses", RapportsAnalyses);
app.use("/gescom-compta/fonctionnalites-comptables", FonctionnalitesComptables);
app.use("/gescom-compta/gestion-tva", GestionTVA);
app.use("/gescom-compta/securite-confidentialite", SecuriteConfidentialite);
app.use("/gescom-compta/automatisation", Automatisation);



//Routes
const HomeRoutes = require("./routes/Home");
const UserRoutes = require("./routes/User");
const ClientRoutes = require("./routes/Client");
const FournisseurRoutes = require("./routes/Fournisseur");
const ProduitRoutes = require("./routes/Produit");
const GescomComptaRoutes = require("./routes/GescomCompta");
const DevisRoutes = require("./routes/Devis");
const BonLivraisonRoutes = require("./routes/BonLivraison");
const FactureRoutes = require("./routes/Facture");
const CompteBancaireRoutes = require("./routes/CompteBancaire");
const StockRoutes = require("./routes/Stock");
const RapportsAnalysesRoutes = require("./routes/RapportsAnalyses");
const FonctionnalitesComptablesRoutes = require("./routes/FonctionnalitesComptables");
const GestionTVARoutes = require("./routes/GestionTVA");
const SecuriteConfidentialiteRoutes = require("./routes/SecuriteConfidentialite");
const AutomatisationRoutes = require("./routes/Automatisation");


 // Routes
http://localhost:5000/*
app.use("/home", HomeRoutes);
app.use("/user", UserRoutes);
 app.use("/client", ClientRoutes);
 app.use("/fournisseur", FournisseurRoutes);
 app.use("/produit", ProduitRoutes);
 app.use("/gescomCompta", GescomComptaRoutes);
 app.use("/devis", DevisRoutes);
 app.use("/bonLivraison", BonLivraisonRoutes);
 app.use("/facture", FactureRoutes);
 app.use("/compteBancaire", CompteBancaireRoutes);
 app.use("/stock", StockRoutes);
 app.use("/rapportsAnalyses", RapportsAnalysesRoutes);
 app.use("/fonctionnalitesComptables", FonctionnalitesComptablesRoutes);
 app.use("/gestionTVA", GestionTVARoutes);
 app.use("/securiteConfidentialite", SecuriteConfidentialiteRoutes);
 app.use("/automatisation", AutomatisationRoutes);

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT || 5000}`);
});