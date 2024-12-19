const OpenAI = require('openai');
const arrayToString = require('../../utils/arrayToString');

const openai = new OpenAI();

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

  const tools = [
    {
      type: 'function',
      function: {
        name: 'generateMealIdeas',
        description: 'Generates a weekly meal plan.',
        parameters: {
          type: 'object',
          description:
            'An object containing an array of items that represents meal ideas for the specified days.',
          properties: {
            days: {
              type: 'array',
              description:
                'An array of objects representing meal ideas for the specified days.',
              items: {
                type: 'object',
                description:
                  'An object representing a meal idea, including the day of the week and the name of the meal idea.',
                properties: {
                  day: {
                    type: 'string',
                    description:
                      'The day of the week that the meal idea is for',
                  },
                  name: {
                    type: 'string',
                    description:
                      'The name of the generated meal idea. Should NEVER be an empty string.',
                  },
                },
              },
            },
          },
          required: ['days', 'day', 'name'],
        },
      },
    },
  ];

  let name = '';

  while (!name) {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content:
            "As a helpful assistant, your task is to generate creative meal ideas for specific days. Your responses must strictly follow the provided schema, which includes the fields: days, day, and name. Please refrain from including any extra fields in your responses. Ensure that you always generate a meal idea for each specified day in the 'names' field, avoiding any empty strings.",
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      tools,
    });

    const data = response.choices[0].message.tool_calls[0];
    const ideas = JSON.parse(data.function.arguments);
    req.body.ideas = ideas.days;
    name = ideas.days[0].name;
  }

  next();
};

module.exports = { generateMealIdeas };
