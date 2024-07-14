// src/routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route: POST /api/users/register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
