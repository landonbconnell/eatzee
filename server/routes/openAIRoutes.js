const express = require("express");
const router = express.Router();
const axios = require("axios");
const { generateRecipe } = require("../controllers/OpenAI/mealsController.js");
const {
  generateMealIdeas,
} = require("../middleware/openai/generateMealIdeas.js");
const { getUserData } = require("../middleware/users/getUserData.js");

router.post("/generateMealPlan", getUserData, generateMealIdeas, (req, res) => {
  const mealPlan = {
    days: [],
  };

  console.log(req.body);
  const mealIdeas = req.body.ideas;
  let promises = mealIdeas.map((idea) => generateRecipe(req, idea));

  Promise.all(promises)
    .then((recipes) => {
      mealPlan.days = recipes; // Save the recipes to mealPlan.days
      res.status(200).json(mealPlan); // Send the meal plan back to the client
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.toString() }); // Send error to client
    });
});

module.exports = router;
