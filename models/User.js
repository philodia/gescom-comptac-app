const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'utilisateur'],
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
