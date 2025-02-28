const crypto = require('crypto');

// Generate random token
const generateToken = () => {
  return crypto.randomBytes(16).toString('hex');
};

// Validate token (contoh sederhana, bisa dikembangkan)
const validateToken = (token) => {
  return token && token.length === 32; // Contoh validasi sederhana
};

module.exports = { generateToken, validateToken };