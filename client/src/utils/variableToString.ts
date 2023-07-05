import { Variables } from 'models/meals/enums/Variables';

export const variableToString = (variable: Variables) => {
  switch (variable) {
    case Variables.time:
      return 'Time';
    case Variables.budget:
      return 'Budget';
    case Variables.food_mood:
      return 'Food Mood';
    case Variables.skill_level:
      return 'Skill Level';
    default:
      return '';
  }
};

export const variableToPropString = (variable: Variables) => {
  switch (variable) {
    case Variables.time:
      return 'time';
    case Variables.budget:
      return 'budget';
    case Variables.food_mood:
      return 'food_mood';
    case Variables.skill_level:
      return 'skill_level';
    default:
      return '';
  }
};
