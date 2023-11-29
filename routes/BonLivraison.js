const express = require("express");
const router = express.Router();
const { BonLivraison } = require("../models/BonLivraison");
const { Client } = require("../models/Client");

// Affiche la liste des bons de livraison
router.get("/", async (req, res) => {
  const bonsLivraisons = await BonLivraison.find();

  res.json(bonsLivraisons);
});

// Affiche les détails d'un bon de livraison
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const bonLivraison = await BonLivraison.findById(id);

  if (!bonLivraison) {
    res.status(404).send("Bon de livraison non trouvé");
    return;
  }

  res.json(bonLivraison);
});

// Crée un nouveau bon de livraison
router.post("/", async (req, res) => {
  const data = req.body;

  const client = await Client.findById(data.client);

  if (!client) {
    res.status(404).send("Client non trouvé");
    return;
  }

  const bonLivraison = new BonLivraison({
    client: client.id,
    date: data.date,
    reference: data.reference,
    numero: data.numero,
    produits: data.produits,
  });

  await bonLivraison.save();

  res.status(201).send(bonLivraison);
});

// Modifie un bon de livraison
router.put("/:id", async (req, res) => {
  const id = req.params.id;

  const data = req.body;

  const bonLivraison = await BonLivraison.findById(id);

  if (!bonLivraison) {
    res.status(404).send("Bon de livraison non trouvé");
    return;
  }

  bonLivraison.client = client.id || bonLivraison.client;
  bonLivraison.date = data.date || bonLivraison.date;
  bonLivraison.reference = data.reference || bonLivraison.reference;
  bonLivraison.numero = data.numero || bonLivraison.numero;
  bonLivraison.produits = data.produits || bonLivraison.produits;

  await bonLivraison.save();

  res.status(200).send(bonLivraison);
});

// Supprime un bon de livraison
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const bonLivraison = await BonLivraison.findById(id);

  if (!bonLivraison) {
    res.status(404).send("Bon de livraison non trouvé");
    return;
  }

  await bonLivraison.delete();

  res.status(200).send();
});

// Liste des clients d'un bon de livraison
router.get("/:id/clients", async (req, res) => {
  const id = req.params.id;

  const bonLivraison = await BonLivraison.findById(id);

  if (!bonLivraison) {
    res.status(404).send("Bon de livraison non trouvé");
    return;
  }

  const clients = bonLivraison.clients;

  res.json(clients);
});


module.exports = router;
