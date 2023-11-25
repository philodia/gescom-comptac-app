const express = require("express");
const Client = require("./models/Client");

const clientController = express.Router();

clientController.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

clientController.get("/:id", async (req, res) => {
  const client = await Client.findById(req.params.id);
  res.json(client);
});

clientController.post("/", async (req, res) => {
  const client = new Client({
    nom: req.body.nom,
    adresse: req.body.adresse,
    telephone: req.body.telephone,
    email: req.body.email,
  });

  await client.save();
  res.json(client);
});

clientController.put("/:id", async (req, res) => {
  const client = await Client.findByIdAndUpdate(
    req.params.id,
    {
      nom: req.body.nom,
      adresse: req.body.adresse,
      telephone: req.body.telephone,
      email: req.body.email,
    },
    {
      new: true,
    }
  );
  res.json(client);
});

clientController.delete("/:id", async (req, res) => {
  await Client.deleteOne({ _id: req.params.id });
  res.status(204).send();
});

module.exports = clientController;
