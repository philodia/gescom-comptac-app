const express = require("express");

const Automatisation = express.Router();

Automatisation.get("/", async (req, res) => {
  // ...
});

Automatisation.get("/:type", async (req, res) => {
  // ...
});

Automatisation.post("/", async (req, res) => {
  // ...
});

module.exports = Automatisation;
