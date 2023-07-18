const express = require("express");
const krogerRoutes = require("./krogerRoutes");
const userRoutes = require("./userRoutes");
const openAIRoutes = require("./openAIRoutes");

const router = express.Router();

router.use("/kroger", krogerRoutes);
router.use("/users", userRoutes);
router.use("/openai", openAIRoutes);

module.exports = router;
