const express = require("express");
const router = express.Router();
const {
  generateMealPlan,
} = require("../controllers/OpenAI/mealsController.js");
const { getUserData } = require("../middleware/users/getUserData.js");

router.post("/generateMealPlan", getUserData, generateMealPlan);

module.exports = router;
