import { MealsState } from 'redux/reducers/mealsSlice';
import { Weekdays, Meals } from './enums';
import { Day } from './interfaces';

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
  editMode: true,
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
