const express = require("express");
const router = express.Router();
const { requestAuthCode } = require("../controllers/kroger/authControllers.js");

router.get("/auth/requestAuthCode", requestAuthCode);

module.exports = router;
