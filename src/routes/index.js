const express = require('express');
const router = express.Router();
const { generateToken, validateToken } = require('../utils/token');

// Home page
router.get('/', (req, res) => {
  res.render('index');
});

// AdLinks page
router.get('/adlink', (req, res) => {
  const token = generateToken(); // Generate token
  res.render('adlink', { token });
});

// Finish page (after AdLinks)
router.get('/finish', (req, res) => {
  const { token } = req.query;

  if (!token || !validateToken(token)) {
    return res.redirect('/adlink'); // Redirect jika token tidak valid
  }

  res.render('finish');
});

module.exports = router;