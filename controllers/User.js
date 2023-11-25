const express = require("express");
const userModel = require("./models/User");

const userController = express.Router();

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(401).send("Utilisateur non trouvé");
  }

  if (user.password !== password) {
    return res.status(401).send("Mot de passe incorrect");
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

userController.post("/register", async (req, res) => {
  const { email, password, nom, prenom } = req.body;

  const userExists = await userModel.findOne({ email });
  if (userExists) {
    return res.status(400).send("L'adresse e-mail est déjà utilisée");
  }

  const user = new userModel({
    email,
    password,
    nom,
    prenom,
  });

  await user.save();

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

module.exports = userController;
