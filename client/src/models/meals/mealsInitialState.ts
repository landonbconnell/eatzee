import { MealsState } from 'redux/reducers/mealsSlice';
import { Weekdays } from './enums/Weekdays';
import { Day } from './interfaces/Day';
import { Meals } from './enums/Meals';

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

export const mealsInitialState: MealsState = {
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
