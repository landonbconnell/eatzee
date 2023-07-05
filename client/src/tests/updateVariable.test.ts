import { configureStore } from '@reduxjs/toolkit';
import mealsReducer, {
  updateVariable,
  changeMeal,
} from 'redux/reducers/mealsSlice';
import { mealsInitialState } from '../models/meals/mealsInitialState';
import { Weekdays } from '../models/meals/enums/Weekdays';
import { Variables } from '../models/meals/enums/Variables';
import { Meals } from 'models/meals/enums/Meals';

describe('update variables reducer', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { meals: mealsReducer } });
  });

  it('updates monday time', () => {
    expect(store.getState().meals).toEqual(mealsInitialState);

    store.dispatch(
      updateVariable({
        weekday: Weekdays.Monday,
        variable: Variables.time,
        value: 3,
      })
    );

    expect(
      store.getState().meals.meals.breakfast.days[Weekdays.Monday].time
    ).toEqual(3);
  });

  it('updates tuesday budget', () => {
    expect(store.getState().meals).toEqual(mealsInitialState);

    store.dispatch(
      updateVariable({
        weekday: Weekdays.Tuesday,
        variable: Variables.budget,
        value: 1,
      })
    );

    expect(
      store.getState().meals.meals.breakfast.days[Weekdays.Tuesday].budget
    ).toEqual(1);
  });

  it('updates wednesday food_mood', () => {
    expect(store.getState().meals).toEqual(mealsInitialState);

    store.dispatch(
      updateVariable({
        weekday: Weekdays.Wednesday,
        variable: Variables.food_mood,
        value: 4,
      })
    );

    expect(
      store.getState().meals.meals.breakfast.days[Weekdays.Wednesday].food_mood
    ).toEqual(4);
  });

  it('updates thursday skill_level', () => {
    expect(store.getState().meals).toEqual(mealsInitialState);

    store.dispatch(
      updateVariable({
        weekday: Weekdays.Thursday,
        variable: Variables.skill_level,
        value: 0,
      })
    );

    expect(
      store.getState().meals.meals.breakfast.days[Weekdays.Thursday].skill_level
    ).toEqual(0);
  });

  it("updates friday's lunch time", () => {
    expect(store.getState().meals).toEqual(mealsInitialState);

    store.dispatch(changeMeal(Meals.lunch));

    store.dispatch(
      updateVariable({
        weekday: Weekdays.Friday,
        variable: Variables.time,
        value: 4,
      })
    );

    expect(
      store.getState().meals.meals.lunch.days[Weekdays.Friday].time
    ).toEqual(4);
  });

  it("updates saturday's dinner budget", () => {
    expect(store.getState().meals).toEqual(mealsInitialState);

    store.dispatch(changeMeal(Meals.dinner));

    store.dispatch(
      updateVariable({
        weekday: Weekdays.Saturday,
        variable: Variables.budget,
        value: 3,
      })
    );

    expect(
      store.getState().meals.meals.dinner.days[Weekdays.Saturday].budget
    ).toEqual(3);
  });
});
