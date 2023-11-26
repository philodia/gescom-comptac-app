const express = require("express");

const SecuriteConfidentialite = express.Router();

SecuriteConfidentialite.get("/", async (req, res) => {
  // ...
});

SecuriteConfidentialite.get("/:type", async (req, res) => {
  // ...
});

SecuriteConfidentialite.post("/", async (req, res) => {
  // ...
});

module.exports = SecuriteConfidentialite;
