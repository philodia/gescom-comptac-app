const express = require("express");
const router = express.Router();
const { User, Client, Produit, Devis, Fournisseur } = require("../models/Fournisseur");

// Affiche la page de création d'un fournisseur
router.get("/nouvelle", (req, res) => {
  const user = req.user;

  res.render("fournisseur-nouvelle", {
    user: user,
  });
});

// Crée un nouveau fournisseur
router.post("/nouvelle", async (req, res) => {
  const user = req.user;

  const fournisseur = new Fournisseur({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    telephone: req.body.telephone,
    adresse: req.body.adresse,
    code_postal: req.body.code_postal,
    ville: req.body.ville,
  });
  await fournisseur.save();

  res.redirect("/gescom-compta/fournisseurs");
});

// Récupère un fournisseur par son ID
router.get("/:id", async (req, res) => {
  const fournisseur = await Fournisseur.findById(req.params.id);
  res.json(fournisseur);
});

// Met à jour un fournisseur
router.put("/:id", async (req, res) => {
  const fournisseur = await Fournisseur.findById(req.params.id);
  fournisseur.nom = req.body.nom;
  fournisseur.prenom = req.body.prenom;
  fournisseur.email = req.body.email;
  fournisseur.telephone = req.body.telephone;
  fournisseur.adresse = req.body.adresse;
  fournisseur.code_postal = req.body.code_postal;
  fournisseur.ville = req.body.ville;
  await fournisseur.save();

  res.redirect("/gescom-compta/fournisseurs");
});

// Supprime un fournisseur
router.delete("/:id", async (req, res) => {
  await Fournisseur.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
