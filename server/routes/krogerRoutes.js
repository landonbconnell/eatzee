const express = require("express");
const router = express.Router();
const {
  requestAccessToken,
  requestAuthCode,
} = require("../controllers/krogerController.js");

router.get("/auth/requestAccessToken", requestAccessToken);
router.get("/auth/requestAuthCode", requestAuthCode);

module.exports = router;
