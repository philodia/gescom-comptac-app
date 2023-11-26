const express = require("express");

const RapportsAnalyses = express.Router();

RapportsAnalyses.get("/", async (req, res) => {
  // ...
});

RapportsAnalyses.get("/:type", async (req, res) => {
  // ...
});

RapportsAnalyses.post("/", async (req, res) => {
  // ...
});

module.exports = RapportsAnalyses;
