const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userController.login(email, password);

  if (!user) {
    return res.status(401).send("Identifiants incorrects");
  }

  const token = await user.generateJwtToken();

  res.cookie("auth_token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 60 * 24 * 7),
  });

  res.send(user);
});

router.post("/logout", async (req, res) => {
  req.cookies.remove("auth_token");

  res.sendStatus(200);
});

module.exports = router;
