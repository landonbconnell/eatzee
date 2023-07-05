import { Weekdays } from 'models/meals/enums/Weekdays';

export interface Day {
  weekday: Weekdays;
  edit: boolean;
  time: number;
  budget: number;
  food_mood: number;
  skill_level: number;
}
