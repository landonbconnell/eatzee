import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { mealToPropString } from 'utils/mealToString';
import { variableToPropString } from 'utils/variableToString';
import { Weekdays, Variables, Meals, Cuisines } from 'models/meals/enums';
import { Day, Dish } from 'models/meals/interfaces';
import { mealsInitialState as initialState } from 'models/meals/mealsInitialState';

export interface MealsState {
  currentMeal: Meals;
  meals: {
    breakfast: {
      cuisines: Cuisines[];
      editMode: boolean;
      days: Day[];
    };
    lunch: {
      cuisines: Cuisines[];
      editMode: boolean;
      days: Day[];
    };
    dinner: {
      cuisines: Cuisines[];
      editMode: boolean;
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
    setDish: (
      state,
      action: PayloadAction<{
        weekday: Weekdays;
        dish: Dish;
      }>
    ) => {
      const { weekday, dish } = action.payload;

      state.meals[mealToPropString(state.currentMeal)].days.find(
        (day: Day) => day.weekday === weekday
      ).dish = dish;
    },
    setWeekEditMode: (state, action: PayloadAction<{ edit: boolean }>) => {
      const { edit } = action.payload;
      state.meals[mealToPropString(state.currentMeal)].editMode = edit;
    },
    setDayEditMode: (
      state,
      action: PayloadAction<{ weekday: Weekdays; edit: boolean }>
    ) => {
      const { weekday, edit } = action.payload;

      state.meals[mealToPropString(state.currentMeal)].days.find(
        (day: Day) => day.weekday === weekday
      ).edit = edit;
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
  setDish,
  setWeekEditMode,
  setDayEditMode,
} = mealsSlice.actions;

export default mealsSlice.reducer;
