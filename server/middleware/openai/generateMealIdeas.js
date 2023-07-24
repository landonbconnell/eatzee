const { Configuration, OpenAIApi } = require("openai");
const arrayToString = require("../../utils/arrayToString");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const mixCuisines = (cuisines, length) => {
  let mixedCuisines = [];
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * cuisines.length);
    mixedCuisines.push(cuisines[randomIndex]);
  }
  return mixedCuisines;
};

const generateMealIdeas = async (req, res, next) => {
  const {
    weekdays,
    dietaryRestrictions,
    currentMeal,
    allergies,
    skillLevel,
    cookingEquipment,
    time,
    budget,
    foodMood,
    cuisines,
  } = req.body.data;

  let prompt = `I'm looking for ${arrayToString(
    dietaryRestrictions
  )} ${currentMeal} meal ideas for ${arrayToString(weekdays)}. `;

  if (allergies.length > 0) {
    prompt += `Meal ideas shouldn't contain ${arrayToString(
      allergies
    )}, as I'm allergic to them. `;
  }

  prompt += `I'm a ${skillLevel} cook and have access to a ${arrayToString(
    cookingEquipment
  )}. Each meal idea should take no more than ${time} to prepare. I'm on a ${budget} budget and I'm aiming for a ${foodMood} level of healthiness. `;

  if (cuisines.length > 0) {
    prompt += `I prefer ${arrayToString(
      mixCuisines(cuisines, weekdays.length)
    )} cuisines.`;
  }

  prompt +=
    " I'm feeling adventurous so feel free to suggest new obscure foods!";

  console.log(prompt);

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0613",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that generates creative meal ideas for the specified days. Your responses should strictly adhere to the provided schema, which includes the following fields: days, day, and name. Please do not include any additional fields in your responses.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      functions: [
        {
          name: "generateMealIdeas",
          description: "Generates a weekly meal plan.",
          parameters: {
            type: "object",
            description:
              "An object containing an array of items that represents meal ideas for the specified days.",
            properties: {
              days: {
                type: "array",
                description:
                  "An array of objects representing meal ideas for the specified days.",
                items: {
                  type: "object",
                  description:
                    "An object representing a meal idea, including the day of the week and the name of the meal idea.",
                  properties: {
                    day: {
                      type: "string",
                      description:
                        "The day of the week that the meal idea is for",
                    },
                    name: {
                      type: "string",
                      description: "The name of the generated meal idea",
                    },
                  },
                },
              },
            },
            required: ["days", "day", "name"],
          },
        },
      ],
      function_call: "auto",
      temperature: 1.4,
    });

    const data = JSON.parse(
      completion.data.choices[0].message.function_call.arguments
    );
    req.body.ideas = data.days;
    next();
  } catch (error) {
    //console.error(error.response.data.error);
    throw error;
  }
};

module.exports = { generateMealIdeas };
