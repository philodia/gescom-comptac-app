const express = require('express');
const router = express.Router();

// Route de déconnexion
router.get('/logout', (req, res) => {
  // Destruction de la session
  req.session.destroy();

  // Redirection vers la page d'accueil
  res.redirect('/');
});

module.exports = router;
