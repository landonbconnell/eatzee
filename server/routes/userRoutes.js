const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const {
  login,
  logout,
  registerNewUser,
  updateUserData,
} = require('../controllers/userController.js');
const {
  registerValidators,
} = require('../middleware/registration/registerValidators.js');
const registerLimiter = require('../middleware/registration/registerLimiter.js');
const loginLimiter = require('../middleware/login/loginLimiter.js');

router.post('/login', loginLimiter, login);

router.post('/logout', logout);

router.post('/register', registerValidators, registerLimiter, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  registerNewUser(req, res);
});

router.put('/update', updateUserData);

module.exports = router;
