import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { mealToPropString } from 'utils/mealToString';
import { variableToPropString } from 'utils/variableToString';

export enum Weekdays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

export enum Variables {
  time,
  budget,
  food_mood,
  skill_level,
}

export interface Day {
  weekday: Weekdays;
  edit: boolean;
  time: number;
  budget: number;
  food_mood: number;
  skill_level: number;
}

export enum Meals {
  breakfast,
  lunch,
  dinner,
}

export interface MealsState {
  currentMeal: Meals;
  meals: {
    breakfast: {
      days: Day[];
    };
    lunch: {
      days: Day[];
    };
    dinner: {
      days: Day[];
    };
  };
}

const defaultWeekdays: Day[] = [
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

const initialState: MealsState = {
  currentMeal: Meals.breakfast,
  meals: {
    breakfast: {
      days: defaultWeekdays,
    },
    lunch: {
      days: defaultWeekdays,
    },
    dinner: {
      days: defaultWeekdays,
    },
  },
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    changeMeal: (state, action: PayloadAction<Meals>) => {
      state.currentMeal = action.payload;
    },
    updateVariable: (
      state,
      action: PayloadAction<{
        weekday: Weekdays;
        variable: Variables;
        value: number;
      }>
    ) => {
      const { weekday, variable, value } = action.payload;
      state.meals[mealToPropString(state.currentMeal)].days[weekday][
        variableToPropString(variable)
      ] = value;
    },
  },
});

// Action creators are generated for each case reducer function

export const { changeMeal, updateVariable } = mealsSlice.actions;

export default mealsSlice.reducer;
