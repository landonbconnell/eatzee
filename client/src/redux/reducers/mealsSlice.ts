import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { mealToPropString } from 'utils/mealToString';
import { variableToPropString } from 'utils/variableToString';
import { Weekdays, Variables, Meals, Cuisines } from 'models/meals/enums';
import { Day } from 'models/meals/interfaces';
import { mealsInitialState as initialState } from 'models/meals/mealsInitialState';

export interface MealsState {
  editMode: boolean;
  currentMeal: Meals;
  meals: {
    breakfast: {
      cuisines: Cuisines[];
      days: Day[];
    };
    lunch: {
      cuisines: Cuisines[];
      days: Day[];
    };
    dinner: {
      cuisines: Cuisines[];
      days: Day[];
    };
  };
}

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    changeMeal: (state, action: PayloadAction<Meals>) => {
      state.currentMeal = action.payload;
    },
    updateDayVariable: (
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
    updateWeekVariable: (
      state,
      action: PayloadAction<{
        variable: Variables;
        value: number;
      }>
    ) => {
      const { variable, value } = action.payload;

      state.meals[mealToPropString(state.currentMeal)].days.forEach(
        (day: Day) => {
          day[variableToPropString(variable)] = value;
        }
      );
    },
    addCuisine: (
      state,
      action: PayloadAction<{
        cuisine: Cuisines;
      }>
    ) => {
      const newCuisine = action.payload;
      state.meals[mealToPropString(state.currentMeal)].cuisines = [
        ...state.meals[mealToPropString(state.currentMeal)].cuisines,
        newCuisine,
      ];
    },
    removeCuisine: (
      state,
      action: PayloadAction<{
        cuisine: Cuisines;
      }>
    ) => {
      const newCuisine = action.payload;
      state.meals[mealToPropString(state.currentMeal)].cuisines = state.meals[
        mealToPropString(state.currentMeal)
      ].cuisines.filter((cuisine) => cuisine !== newCuisine);
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  changeMeal,
  updateDayVariable,
  updateWeekVariable,
  addCuisine,
  removeCuisine,
} = mealsSlice.actions;

export default mealsSlice.reducer;
