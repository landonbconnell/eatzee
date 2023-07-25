import { Weekdays } from 'models/meals/enums';

export interface Dish {
  name: string;
  description: string;
  recipe: {
    ingredients: Ingredients[];
    instructions: string[];
  };
}

export interface Ingredients {
  name: string;
  amount: string;
}

export interface Day {
  weekday: Weekdays;
  edit: boolean;
  time: number;
  budget: number;
  food_mood: number;
  portion_size: number;
  skill_level: number;
  dish?: Dish;
}
