const mongoose = require("mongoose");
const User = require('../models/User');

class UserController {
  async login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
      return null;
    }

    if (user.password !== password) {
      return null;
    }

    const token = await user.generateJwtToken();

    return {
      user,
      token,
    };
  }

  async logout(req) {
    req.cookies.remove("auth_token");

    return {
      message: "Déconnexion réussie",
    };
  }
}

module.exports = UserController;
