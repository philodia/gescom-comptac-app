const express = require("express");
const router = express.Router();
const { Devis } = require("../models/Devis");

// Affiche la liste des devis
router.get("/", async (req, res) => {
  const devis = await Devis.find();

  res.json(devis);
});

// Affiche les détails d'un devis
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const devis = await Devis.findById(id);

  if (!devis) {
    res.status(404).send("Devis non trouvé");
    return;
  }

  res.json(devis);
});

// Crée un nouveau devis
router.post("/", async (req, res) => {
  const data = req.body;

  const client = await Client.findById(data.clientId);

  if (!client) {
    res.status(404).send("Client non trouvé");
    return;
  }

  const devis = new Devis({
    client: client,
    reference: data.reference,
    date: data.date,
    montant: data.montant,
    description: data.description,
  });

  await devis.save();

  res.status(201).send(devis);
});

// Modifie un devis
router.put("/:id", async (req, res) => {
  const id = req.params.id;

  const data = req.body;

  const devis = await Devis.findById(id);

  if (!devis) {
    res.status(404).send("Devis non trouvé");
    return;
  }

  devis.client = await Client.findById(data.clientId);
  devis.reference = data.reference || devis.reference;
  devis.date = data.date || devis.date;
  devis.montant = data.montant || devis.montant;
  devis.description = data.description || devis.description;

  await devis.save();

  res.status(200).send(devis);
});

// Supprime un devis
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const devis = await Devis.findById(id);

  if (!devis) {
    res.status(404).send("Devis non trouvé");
    return;
  }

  await devis.delete();

  res.status(200).send();
});

module.exports = router;
