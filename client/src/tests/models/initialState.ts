import { Weekdays, Meals, MealsState, Day } from 'redux/reducers/mealsSlice';

export const initialDays: Day[] = [
  {
    weekday: Weekdays.Monday,
    edit: true,
    time: 2,
    budget: 2,
    food_mood: 2,
    skill_level: 2,
  },
  {
    weekday: Weekdays.Tuesday,
    edit: true,
    time: 2,
    budget: 2,
    food_mood: 2,
    skill_level: 2,
  },
  {
    weekday: Weekdays.Wednesday,
    edit: true,
    time: 2,
    budget: 2,
    food_mood: 2,
    skill_level: 2,
  },
  {
    weekday: Weekdays.Thursday,
    edit: true,
    time: 2,
    budget: 2,
    food_mood: 2,
    skill_level: 2,
  },
  {
    weekday: Weekdays.Friday,
    edit: true,
    time: 2,
    budget: 2,
    food_mood: 2,
    skill_level: 2,
  },
  {
    weekday: Weekdays.Saturday,
    edit: true,
    time: 2,
    budget: 2,
    food_mood: 2,
    skill_level: 2,
  },
  {
    weekday: Weekdays.Sunday,
    edit: true,
    time: 2,
    budget: 2,
    food_mood: 2,
    skill_level: 2,
  },
];

export const initialState: MealsState = {
  currentMeal: Meals.breakfast,
  meals: {
    breakfast: {
      days: initialDays,
    },
    lunch: {
      days: initialDays,
    },
    dinner: {
      days: initialDays,
    },
  },
};
