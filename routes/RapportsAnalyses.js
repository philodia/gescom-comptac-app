const express = require("express");
const router = express.Router();
const { Produit, BonLivraison, CompteBancaire,  } = require("../models/RapportsAnalyses");

// Affiche la page de génération de rapports et d'analyses
router.get("/", (req, res) => {
  const user = req.user;

  res.render("rapports-analyses", {
    user: user,
  });
});

// Génère un rapport de ventes
router.get("/ventes", async (req, res) => {
  const user = req.user;

  const ventes = await BonLivraison.find({
    user: user,
  }, {
    produits: {
      "$elemMatch": {
        quantite: {
          $gt: 0,
        },
      },
    },
  });

  const produits = await Produit.find();

  res.render("rapport-ventes", {
    user: user,
    ventes: ventes,
    produits: produits,
  });
});

// Génère un rapport de marge
router.get("/marge", async (req, res) => {
  const user = req.user;

  const ventes = await BonLivraison.find({
    user: user,
  }, {
    produits: {
      "$elemMatch": {
        quantite: {
          $gt: 0,
        },
      },
    },
  });

  const produits = await Produit.find();

  res.render("rapport-marge", {
    user: user,
    ventes: ventes,
    produits: produits,
  });
});

// Génère un rapport de trésorerie
router.get("/tresorerie", async (req, res) => {
  const user = req.user;

  const mouvements = await CompteBancaire.find({
    user: user,
  }, {
    type: {
      $in: ["Virement", "Paiement", "Recette"],
    },
  });

  res.render("rapport-tresorerie", {
    user: user,
    mouvements: mouvements,
  });
});

module.exports = router;
