export const mealNumToString = (meal) => {
  switch (meal) {
    case 0:
      return 'breakfast';
    case 1:
      return 'lunch';
    case 2:
      return 'dinner';
    default:
      return '';
  }
};

export const budgetNumToString = (budget) => {
  switch (budget) {
    case 0:
      return 'very low';
    case 1:
      return 'low';
    case 2:
      return 'moderate';
    case 3:
      return 'high';
    case 4:
      return 'very high';
    default:
      return '';
  }
};

export const timeNumToString = (time) => {
  switch (time) {
    case 0:
      return '15 minutes';
    case 1:
      return '30 minutes';
    case 2:
      return '1 hour';
    case 3:
      return '1 hour and 30 minutes';
    case 4:
      return '2 hours';
    default:
      return '';
  }
};

export const foodMoodNumToString = (foodMood) => {
  switch (foodMood) {
    case 0:
      return 'very low';
    case 1:
      return 'low';
    case 2:
      return 'moderate';
    case 3:
      return 'high';
    case 4:
      return 'very high';
    default:
      return '';
  }
};
