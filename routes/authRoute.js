const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = User.findOne({ username });

  if (!user) {
    return res.status(401).json({ error: 'Utilisateur non trouvé' });
  }

  const isMatch = bcrypt.compareSync(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ error: 'Mot de passe incorrect' });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
});

router.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const role = req.body.role;

  const user = new User({
    username,
    password: bcrypt.hashSync(password, 10),
    firstName,
    lastName,
    role,
  });

  user.save((err, user) => {
    if (err) {
      return res.status(500).json(err);
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token });
  });
});

module.exports = router;
