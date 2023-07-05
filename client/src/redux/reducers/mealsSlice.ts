import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { mealToPropString } from 'utils/mealToString';
import { variableToPropString } from 'utils/variableToString';
import { Weekdays } from 'models/meals/enums/Weekdays';
import { Variables } from 'models/meals/enums/Variables';
import { Meals } from 'models/meals/enums/Meals';
import { Day } from 'models/meals/interfaces/Day';
import { mealsInitialState as initialState } from 'models/meals/mealsInitialState';

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
