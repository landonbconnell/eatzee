import { mealToPropString } from 'utils/mealToString';

export const currentMealSelector = (state) => state.meals.currentMeal;

export const editModeSelector = (state) => state.meals.editMode;

export const cuisinesSelector = (state) =>
  state.meals.meals[mealToPropString(state.meals.currentMeal)].cuisines;
