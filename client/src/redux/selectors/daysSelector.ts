import { Meals } from "../reducers/mealsSlice"

export const daysSelector = (state) => {
    switch (state.currentMeal) {
        case Meals.breakfast:
            return state.meals.breakfast.days;
        case Meals.lunch:
            return state.meals.lunch.days;
        case Meals.dinner:
            return state.meals.dinner.days;
        default:
            return [];
    }
};