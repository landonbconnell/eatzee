const express = require("express");
const router = express.Router();
const {
  generateMealPlan,
} = require("../controllers/OpenAI/mealsController.js");

router.post("/generateMealPlan", generateMealPlan);

module.exports = router;
