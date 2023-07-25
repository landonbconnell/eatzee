const express = require("express");
const router = express.Router();
const {
  generateMealPlan,
} = require("../controllers/OpenAI/mealsController.js");
const {
  generateMealIdeas,
} = require("../middleware/openai/generateMealIdeas.js");
const { getUserData } = require("../middleware/users/getUserData.js");

router.post(
  "/generateMealPlan",
  getUserData,
  generateMealIdeas,
  generateMealPlan
);

module.exports = router;
