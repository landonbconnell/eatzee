import { Meals } from '../models/meals/enums';

export const mealToString = (meal: Meals) => {
  switch (meal) {
    case Meals.breakfast:
      return 'Breakfast';
    case Meals.lunch:
      return 'Lunch';
    case Meals.dinner:
      return 'Dinner';
    default:
      return '';
  }
};

export const mealToPropString = (meal: Meals) => {
  switch (meal) {
    case Meals.breakfast:
      return 'breakfast';
    case Meals.lunch:
      return 'lunch';
    case Meals.dinner:
      return 'dinner';
    default:
      return '';
  }
};
