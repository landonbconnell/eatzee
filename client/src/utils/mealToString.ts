import { Meals } from "redux/reducers/mealsSlice";

export const mealToString = (meal: Meals) => {
  switch (meal) {
    case Meals.Breakfast:
      return "Breakfast";
    case Meals.Lunch:
      return "Lunch";
    case Meals.Dinner:
      return "Dinner";
    default:
      return "";
  }
};
