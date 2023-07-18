const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const dishSchema = {};

const arrayToString = (arr) => {
  if (arr.length === 0) {
    return "";
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    let lastElement = arr.pop();
    return arr.join(", ") + ", and " + lastElement;
  }
};

const mixCuisines = (cuisines) => {
  let weeklyPlan = [];
  for (let i = 0; i < 7; i++) {
    let randomIndex = Math.floor(Math.random() * cuisines.length);
    weeklyPlan.push(cuisines[randomIndex]);
  }
  return weeklyPlan;
};

// const generateMealPlan = async (req, res) => {
//   const {
//     dietaryRestrictions,
//     currentMeal,
//     allergies,
//     skillLevel,
//     equipment,
//     numPeople,
//     time,
//     budget,
//     healthiness,
//     cuisines,
//   } = req.body;

//   let prompt = `I'm looking for a weekly ${arrayToString(
//     dietaryRestrictions
//   )} ${currentMeal} meal plan`;

//   if (allergies.length > 0) {
//     prompt += ` that doesn't contain ${arrayToString(allergies)}`;
//   }

//   prompt += `. I'm a ${skillLevel} cook and have access to ${arrayToString(
//     equipment
//   )}. The plan should feed ${numPeople} people and the meals should take no more than ${time} to prepare. I'm on a ${budget} budget and I'm aiming for a ${healthiness} level of healthiness. `;

//   if (cuisines.length > 0) {
//     prompt += `I prefer ${arrayToString(cuisines)} cuisines.`;
//   }

//   try {
//     const completion = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo-0613",
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are a helpful assistant that generates weekly meal plans.",
//         },
//         {
//           role: "user",
//           content: prompt,
//         },
//       ],
//       functions: [
//         {
//           name: "generateMealPlan",
//           description: "Generates a weekly meal plan, including recipes",
//           parameters: {
//             type: "object",
//             description:
//               "An object containing an array of seven objects representing days of the week, and their corresponding recipes.",
//             properties: {
//               days: {
//                 type: "array",
//                 description:
//                   "An array of objects representing the seven days of the week, and their corresponding recipes.",
//                 items: {
//                   type: "object",
//                   description:
//                     "An object representing a day of the week, and its corresponding recipe.",
//                   properties: {
//                     day: {
//                       type: "string",
//                       description: "The day of the week",
//                     },
//                     dish: {
//                       type: "object",
//                       description: "The dish for the day",
//                       properties: {
//                         name: {
//                           type: "string",
//                           description: "The name of the dish",
//                         },
//                         desc: {
//                           type: "string",
//                           description: "The description of the dish",
//                         },
//                         recipe: {
//                           type: "object",
//                           description: "The recipe of the dish",
//                           properties: {
//                             ingredients: {
//                               type: "array",
//                               description: "The ingredients of the dish",
//                               items: {
//                                 name: {
//                                   type: "string",
//                                   description: "The name of the ingredient",
//                                 },
//                                 quantity: {
//                                   type: "string",
//                                   description: "The quantity of the ingredient",
//                                 },
//                                 unit: {
//                                   type: "string",
//                                   description: "The unit of the ingredient",
//                                 },
//                               },
//                             },
//                             instructions: {
//                               type: "array",
//                               description: "The instructions of the recipe",
//                               items: {
//                                 type: "string",
//                                 description:
//                                   "A single step of the recipe instructions",
//                               },
//                             },
//                           },
//                         },
//                       },
//                     },
//                   },
//                 },
//               },
//               //required: ["days", "name", "desc", "recipe"],
//             },
//           },
//         },
//       ],
//       function_call: "auto",
//       temperature: 1.2,
//     });

//     const data = completion.data.choices[0].message.function_call.arguments;
//     res.json(JSON.parse(data)); // send response to client
//   } catch (error) {
//     console.error(error.response.data.error);
//     res.status(500).json({ error: error.toString() }); // send error to client
//   }
// };

const generateMealPlan = async (req, res) => {
  const {
    dietaryRestrictions,
    currentMeal,
    allergies,
    skillLevel,
    equipment,
    numPeople,
    time,
    budget,
    healthiness,
    cuisines,
  } = req.body;

  let prompt = `I'm looking for a weekly ${arrayToString(
    dietaryRestrictions
  )} ${currentMeal} meal plan`;

  if (allergies.length > 0) {
    prompt += ` that doesn't contain ${arrayToString(allergies)}`;
  }

  prompt += `. I'm a ${skillLevel} cook and have access to a ${arrayToString(
    equipment
  )}. The plan should feed ${numPeople} people and the meals should take no more than ${time} to prepare. I'm on a ${budget} budget and I'm aiming for a ${healthiness} level of healthiness. `;

  if (cuisines.length > 0) {
    prompt += `I prefer ${arrayToString(mixCuisines(cuisines))} cuisines.`;
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
            "You are a helpful assistant that generates weekly meal plans. Your responses should strictly adhere to the provided schema, which includes the following fields: name, desc, and recipe. The recipe field is an object that includes ingredients and instructions. The ingredients field is an array of objects, each with a name and amount. The instructions field is an array of strings. Please do not include any additional fields in your responses.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      functions: [
        {
          name: "generateMealPlan",
          description: "Generates a weekly meal plan.",
          parameters: {
            type: "object",
            description:
              "An object containing an array of items that represents the days of the week.",
            properties: {
              days: {
                type: "array",
                description:
                  "An array of objects representing the seven days of the week, and their corresponding dish name, description, and recipe.",
                items: {
                  type: "object",
                  description:
                    "An object representing a dish, including its name, description, and recipe.",
                  properties: {
                    day: {
                      type: "string",
                      description: "The day of the week",
                    },
                    name: {
                      type: "string",
                      description: "The name of the generated dish",
                    },
                    desc: {
                      type: "string",
                      description: "The description of the generated dish",
                    },
                    recipe: {
                      type: "object",
                      description:
                        "The recipe of the dish, including ingredients and instructions",
                      properties: {
                        ingredients: {
                          type: "array",
                          description: "The ingredients of the dish",
                          items: {
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
                            form: {
                              type: "string",
                              description:
                                "The form of the ingredient, such as chopped, minced, or sliced. Generally used for vegetables and herbs.",
                            },
                          },
                        },
                        instructions: {
                          type: "array",
                          description: "The instructions of the recipe",
                          items: {
                            type: "string",
                            description:
                              "A single step of the recipe instructions",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            required: [
              "days",
              "day",
              "name",
              "desc",
              "recipe",
              "ingredients",
              "amount",
              "instructions",
              "form",
            ],
          },
        },
      ],
      function_call: "auto",
      temperature: 1.4,
    });

    const data = completion.data.choices[0].message.function_call.arguments;
    res.json(JSON.parse(data)); // send response to client
  } catch (error) {
    //console.error(error.response.data.error);
    res.status(500).json({ error: error.toString() }); // send error to client
  }
};

module.exports = {
  generateMealPlan,
};
