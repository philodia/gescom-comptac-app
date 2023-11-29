const express = require("express");
const router = express.Router();
const { Client } = require("../models/Client");

// Affiche la liste des clients
router.get("/", async (req, res) => {
  const clients = await Client.find();

  res.json(clients);
});

// Affiche les détails d'un client
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const client = await Client.findById(id);

  if (!client) {
    res.status(404).send("Client non trouvé");
    return;
  }

  res.json(client);
});

// Crée un nouveau client
router.post("/", async (req, res) => {
  const data = req.body;

  const client = new Client({
    nom: data.nom,
    prenom: data.prenom,
    email: data.email,
    telephone: data.telephone,
    adresse: data.adresse,
    logo: data.logo,
  });

  await client.save();

  res.status(201).send(client);
});

// Modifie un client
router.put("/:id", async (req, res) => {
  const id = req.params.id;

  const data = req.body;

  const client = await Client.findById(id);

  if (!client) {
    res.status(404).send("Client non trouvé");
    return;
  }

  client.nom = data.nom || client.nom;
  client.prenom = data.prenom || client.prenom;
  client.email = data.email || client.email;
  client.telephone = data.telephone || client.telephone;
  client.adresse = data.adresse || client.adresse;
  client.logo = data.logo || client.logo;

  await client.save();

  res.status(200).send(client);
});

// Supprime un client
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const client = await Client.findById(id);

  if (!client) {
    res.status(404).send("Client non trouvé");
    return;
  }

  await client.delete();

  res.status(200).send();
});

// Méthodes supplémentaires

// Récupère la liste des bons de livraison d'un client
router.get("/:id/bonlivraisons", async (req, res) => {
  const id = req.params.id;

  const client = await Client.findById(id);

  if (!client) {
    res.status(404).send("Client non trouvé");
    return;
  }

  const bonsLivraisons = await client.getBonLivraisons();

  res.json(bonsLivraisons);
});

// Récupère la liste des devis d'un client
router.get("/:id/devis", async (req, res) => {
  const id = req.params.id;

  const client = await Client.findById(id);

  if (!client) {
    res.status(404).send("Client non trouvé");
    return;
  }

  const devis = await client.getDevis();

  res.json(devis);
});

// Récupère la liste des factures d'un client
router.get("/:id/factures", async (req, res) => {
  const id = req.params.id;

  const client = await Client.findById(id);

  if (!client) {
    res.status(404).send("Client non trouvé");
    return;
  }

  const factures = await client.getFactures();

  res.json(factures);
});

module.exports = router;
