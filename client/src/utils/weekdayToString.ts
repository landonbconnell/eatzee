import { Weekdays } from 'models/meals/enums';

export const weekdayToString = (weekday: Weekdays) => {
  switch (weekday) {
    case Weekdays.Monday:
      return 'Monday';
    case Weekdays.Tuesday:
      return 'Tuesday';
    case Weekdays.Wednesday:
      return 'Wednesday';
    case Weekdays.Thursday:
      return 'Thursday';
    case Weekdays.Friday:
      return 'Friday';
    case Weekdays.Saturday:
      return 'Saturday';
    case Weekdays.Sunday:
      return 'Sunday';
    default:
      return '';
  }
};
