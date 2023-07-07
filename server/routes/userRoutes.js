const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const { createNewUser } = require('../controllers/userController.js');
const { registerValidators } = require('../middleware/registerValidators.js');
const registerLimiter = require('../middleware/registerLimiter.js');

router.post('/register', registerValidators, registerLimiter, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  createNewUser(req, res);
});

module.exports = router;
