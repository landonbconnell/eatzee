import { Meals } from "../reducers/mealsSlice"
import { createSelector } from "reselect";
import { currentMealSelector } from "./currentMealSelector";

export const breakfastDaysSelector = (state) => state.meals.meals.breakfast.days;
export const lunchDaysSelector = (state) => state.meals.meals.lunch.days;
export const dinnerDaysSelector = (state) => state.meals.meals.dinner.days;

export const daysSelector = createSelector(
    currentMealSelector,
    breakfastDaysSelector,
    lunchDaysSelector,
    dinnerDaysSelector,
    (currentMeal, breakfastDays, lunchDays, dinnerDays) => {
        switch (currentMeal) {
        case Meals.breakfast:
            return breakfastDays;
        case Meals.lunch:
            return lunchDays;
        case Meals.dinner:
            return dinnerDays;
        default:
            return [];
        }
    }
);




