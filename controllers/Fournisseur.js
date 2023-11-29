const express = require("express");
const router = express.Router();
const { Fournisseur } = require("../models/Fournisseur");

// Affiche la liste des fournisseurs
router.get("/", async (req, res) => {
  const fournisseurs = await Fournisseur.find();

  res.json(fournisseurs);
});

// Affiche les détails d'un fournisseur
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const fournisseur = await Fournisseur.findById(id);

  if (!fournisseur) {
    res.status(404).send("Fournisseur non trouvé");
    return;
  }

  res.json(fournisseur);
});

// Crée un nouveau fournisseur
router.post("/", async (req, res) => {
  const data = req.body;

  const fournisseur = new Fournisseur({
    nom: data.nom,
    prenom: data.prenom,
    email: data.email,
    telephone: data.telephone,
    adresse: data.adresse,
    logo: data.logo,
  });

  await fournisseur.save();

  res.status(201).send(fournisseur);
});

// Modifie un fournisseur
router.put("/:id", async (req, res) => {
  const id = req.params.id;

  const data = req.body;

  const fournisseur = await Fournisseur.findById(id);

  if (!fournisseur) {
    res.status(404).send("Fournisseur non trouvé");
    return;
  }

  fournisseur.nom = data.nom || fournisseur.nom;
  fournisseur.prenom = data.prenom || fournisseur.prenom;
  fournisseur.email = data.email || fournisseur.email;
  fournisseur.telephone = data.telephone || fournisseur.telephone;
  fournisseur.adresse = data.adresse || fournisseur.adresse;
  fournisseur.logo = data.logo || fournisseur.logo;

  await fournisseur.save();

  res.status(200).send(fournisseur);
});

// Supprime un fournisseur
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const fournisseur = await Fournisseur.findById(id);

  if (!fournisseur) {
    res.status(404).send("Fournisseur non trouvé");
    return;
  }

  await fournisseur.delete();

  res.status(200).send();
});

// Affiche la liste des commandes d'un fournisseur
router.get("/:id/commandes", async (req, res) => {
  const id = req.params.id;

  const fournisseur = await Fournisseur.findById(id);

  if (!fournisseur) {
    res.status(404).send("Fournisseur non trouvé");
    return;
  }

  const commandes = await fournisseur.getCommandes();

  res.json(commandes);
});

// Affiche la liste des factures d'un fournisseur
router.get("/:id/factures", async (req, res) => {
  const id = req.params.id;

  const fournisseur = await Fournisseur.findById(id);

  if (!fournisseur) {
    res.status(404).send("Fournisseur non trouvé");
    return;
  }

  const factures = await fournisseur.getFactures();

  res.json(factures);
});

module.exports = router;
