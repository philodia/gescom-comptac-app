const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  password: String,
  name: String,
  role: {
    type: String,
    enum: ["gescom", "compta"],
  },
});

const GescomComptaHomeSchema = new Schema({
  user: {
    type: UserSchema,
    required: true,
  },
});

const GescomComptaHome = mongoose.model("GescomComptaHome", GescomComptaHomeSchema);

module.exports = GescomComptaHome;
