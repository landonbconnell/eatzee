const { Configuration, OpenAIApi } = require("openai");
const arrayToString = require("../../utils/arrayToString");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateRecipe = async (req, idea) => {
  const {
    dietaryRestrictions,
    allergies,
    skillLevel,
    cookingEquipment,
    portions,
    time,
    budget,
    foodMood,
  } = req.body.data;

  const { day, name } = idea;

  let prompt = `I'm looking for a ${arrayToString(
    dietaryRestrictions
  )} ${name} recipe for ${day}. `;

  if (allergies.length > 0) {
    prompt += `It shouldn't contain ${arrayToString(
      allergies
    )}, as I'm allergic to them. `;
  }

  prompt += `. I'm a ${skillLevel} cook and have access to a ${arrayToString(
    cookingEquipment
  )}. The recipe should feed ${portions} people and the meals should take no more than ${time} to prepare. I'm on a ${budget} budget and I'm aiming for a ${foodMood} level of healthiness. `;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0613",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that creates a recipe for the specified meal name and day of the week. Your responses should strictly adhere to the provided schema, which includes the following fields: day, name, desc, and recipe. The recipe field is an object that includes ingredients and instructions. The ingredients field is an array of objects, each with a name and amount. The instructions field is an array of strings. Please do not include any additional fields in your responses.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      functions: [
        {
          name: "generateRecipe",
          description:
            "Generates a single recipe for a given meal name and day of the week.",
          parameters: {
            type: "object",
            description:
              "An object representing a recipe for a given meal name and day of the week.",
            properties: {
              day: {
                type: "string",
                description: "The day of the week",
              },
              name: {
                type: "string",
                description: "The name of the meal",
              },
              desc: {
                type: "string",
                description: "The description of the meal",
              },
              recipe: {
                type: "object",
                description:
                  "The recipe of the meal, including ingredients and instructions",
                properties: {
                  ingredients: {
                    type: "array",
                    description: "The ingredients of the dish",
                    items: {
                      type: "object",
                      description:
                        "The object representing a single ingredient",
                      properties: {
                        name: {
                          type: "string",
                          description:
                            "The name of the ingredient, excluding the amount or quantity.",
                        },
                        amount: {
                          type: "string",
                          description:
                            "The amount of the ingredient to use, including a number and an imperial unit, such as cups, teaspoons, or tablespoons.",
                        },
                      },
                    },
                  },
                  instructions: {
                    type: "array",
                    description: "The instructions of the recipe",
                    items: {
                      type: "string",
                      description: "A single step of the recipe instructions",
                    },
                  },
                },
              },
            },
            required: [
              "day",
              "name",
              "desc",
              "recipe",
              "ingredients",
              "amount",
              "instructions",
            ],
          },
        },
      ],
      function_call: "auto",
      temperature: 1.2,
    });

    const data = JSON.parse(
      completion.data.choices[0].message.function_call.arguments
    );
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  generateRecipe,
};
