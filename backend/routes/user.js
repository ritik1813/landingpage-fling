const express = require('express');
const router = express.Router();
const User = require('./models/User'); // import model

router.post('/submit', async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }

  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: 'User saved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
