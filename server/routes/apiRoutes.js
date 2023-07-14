const express = require("express");
const krogerRoutes = require("./krogerRoutes");
const userRoutes = require("./userRoutes");

const router = express.Router();

router.use("/kroger", krogerRoutes);
router.use("/users", userRoutes);

module.exports = router;
