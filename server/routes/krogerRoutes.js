const express = require("express");
const router = express.Router();
const { requestAuthCode } = require("../controllers/kroger/authControllers.js");
const { getProducts } = require("../controllers/kroger/productControllers.js");
const { getLocations } = require("../controllers/kroger/locationController.js");

router.get("/auth/requestAuthCode", requestAuthCode);

router.post("/products/getProducts", getProducts);

router.post("/locations/getLocations", getLocations);

module.exports = router;
