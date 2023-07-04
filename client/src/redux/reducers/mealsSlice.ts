import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MealDay {
  weekday: string;
}

export enum Meals {
  Breakfast,
  Lunch,
  Dinner,
}

export interface MealsState {
  currentMeal: Meals;
  meals: {
    breakfast: {
      days: MealDay[];
    };
    lunch: {
      days: MealDay[];
    };
    dinner: {
      days: MealDay[];
    };
  };
}

const defaultWeekdays: MealDay[] = [
  {
    weekday: "Monday",
  },
  {
    weekday: "Tuesday",
  },
  {
    weekday: "Wednesday",
  },
  {
    weekday: "Thursday",
  },
  {
    weekday: "Friday",
  },
  {
    weekday: "Saturday",
  },
  {
    weekday: "Sunday",
  },
];

const initialState: MealsState = {
  currentMeal: Meals.Breakfast,
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
  name: "meals",
  initialState,
  reducers: {
    changeMeal: (state, action: PayloadAction<Meals>) => {
      state.currentMeal = action.payload;
    },
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function

export const { changeMeal } = mealsSlice.actions;

export default mealsSlice.reducer;
