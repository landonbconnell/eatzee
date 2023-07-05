import { configureStore } from '@reduxjs/toolkit';
import mealsReducer, {
  updateVariable,
  Weekdays,
  Variables,
  Meals,
  MealsState,
  Day,
} from 'redux/reducers/mealsSlice';

describe('meals reducer', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { meals: mealsReducer } });
  });

  const initialDays: Day[] = [
    {
      weekday: Weekdays.Monday,
      edit: true,
      time: 2,
      budget: 2,
      food_mood: 2,
      skill_level: 2,
    },
    {
      weekday: Weekdays.Tuesday,
      edit: true,
      time: 2,
      budget: 2,
      food_mood: 2,
      skill_level: 2,
    },
    {
      weekday: Weekdays.Wednesday,
      edit: true,
      time: 2,
      budget: 2,
      food_mood: 2,
      skill_level: 2,
    },
    {
      weekday: Weekdays.Thursday,
      edit: true,
      time: 2,
      budget: 2,
      food_mood: 2,
      skill_level: 2,
    },
    {
      weekday: Weekdays.Friday,
      edit: true,
      time: 2,
      budget: 2,
      food_mood: 2,
      skill_level: 2,
    },
    {
      weekday: Weekdays.Saturday,
      edit: true,
      time: 2,
      budget: 2,
      food_mood: 2,
      skill_level: 2,
    },
    {
      weekday: Weekdays.Sunday,
      edit: true,
      time: 2,
      budget: 2,
      food_mood: 2,
      skill_level: 2,
    },
  ];

  it('should handle updateVariable', () => {
    const initialState: MealsState = {
      currentMeal: Meals.breakfast,
      meals: {
        breakfast: {
          days: initialDays,
        },
        lunch: {
          days: initialDays,
        },
        dinner: {
          days: initialDays,
        },
      },
    };

    expect(store.getState().meals).toEqual(initialState);

    // dispatch the updateVariable action
    store.dispatch(
      updateVariable({
        weekday: Weekdays.Monday,
        variable: Variables.time,
        value: 3,
      })
    );

    // now the time value for Monday breakfast should be updated to 3
    expect(
      store.getState().meals.meals.breakfast.days[Weekdays.Monday].time
    ).toEqual(3);
  });
});
