import { Meals } from "redux/reducers/mealsSlice";

export const mealToString = (meal: Meals) => {
  switch (meal) {
    case Meals.breakfast:
      return "Breakfast";
    case Meals.lunch:
      return "Lunch";
    case Meals.dinner:
      return "Dinner";
    default:
      return "";
  }
};