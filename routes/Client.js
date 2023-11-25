const express = require("express");
const router = express.Router();
const { User, Client, Produit, Devis } = require("../models/Client");

// Affiche la page de création d'un client
router.get("/nouvelle", (req, res) => {
  const user = req.user;

  res.render("client-nouvelle", {
    user: user,
  });
});

// Crée un nouveau client
router.post("/nouvelle", async (req, res) => {
  const user = req.user;

  const client = new Client({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    telephone: req.body.telephone,
    adresse: req.body.adresse,
    code_postal: req.body.code_postal,
    ville: req.body.ville,
  });
  await client.save();

  res.redirect("/gescom-compta/clients");
});

// Récupère un client par son ID
router.get("/:id", async (req, res) => {
  const client = await Client.findById(req.params.id);
  res.json(client);
});

// Met à jour un client
router.put("/:id", async (req, res) => {
  const client = await Client.findById(req.params.id);
  client.nom = req.body.nom;
  client.prenom = req.body.prenom;
  client.email = req.body.email;
  client.telephone = req.body.telephone;
  client.adresse = req.body.adresse;
  client.code_postal = req.body.code_postal;
  client.ville = req.body.ville;
  await client.save();

  res.redirect("/gescom-compta/clients");
});

// Supprime un client
router.delete("/:id", async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
