const express = require("express");
const router = express.Router();
const { requestAuthCode } = require("../controllers/kroger/authControllers.js");
const { getProducts } = require("../controllers/kroger/productControllers.js");

router.get("/auth/requestAuthCode", requestAuthCode);

router.get("/products/getProducts", getProducts);

module.exports = router;
