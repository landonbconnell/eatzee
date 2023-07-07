const express = require('express');
const { createNewUser } = require('../controllers/userController.js');

const router = express.Router();

router.post('/signup', createNewUser);

module.exports = router;
