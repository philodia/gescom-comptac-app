const express = require("express");

const FonctionnalitesComptables = express.Router();

FonctionnalitesComptables.get("/", async (req, res) => {
  // ...
});

FonctionnalitesComptables.get("/:type", async (req, res) => {
  // ...
});

FonctionnalitesComptables.post("/", async (req, res) => {
  // ...
});

module.exports = FonctionnalitesComptables;
