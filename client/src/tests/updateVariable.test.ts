import { configureStore } from '@reduxjs/toolkit';
import mealsReducer, {
  updateVariable,
  Weekdays,
  Variables,
  changeMeal,
  Meals,
} from 'redux/reducers/mealsSlice';
import { initialState } from './models/initialState';

describe('update variables reducer', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { meals: mealsReducer } });
  });

  it('updates monday time', () => {
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

  it('updates tuesday budget', () => {
    expect(store.getState().meals).toEqual(initialState);

    // dispatch the updateVariable action
    store.dispatch(
      updateVariable({
        weekday: Weekdays.Tuesday,
        variable: Variables.budget,
        value: 1,
      })
    );

    // now the time value for Monday breakfast should be updated to 3
    expect(
      store.getState().meals.meals.breakfast.days[Weekdays.Tuesday].budget
    ).toEqual(1);
  });

  it('updates wednesday food_mood', () => {
    expect(store.getState().meals).toEqual(initialState);

    // dispatch the updateVariable action
    store.dispatch(
      updateVariable({
        weekday: Weekdays.Wednesday,
        variable: Variables.food_mood,
        value: 4,
      })
    );

    // now the time value for Monday breakfast should be updated to 3
    expect(
      store.getState().meals.meals.breakfast.days[Weekdays.Wednesday].food_mood
    ).toEqual(4);
  });

  it('updates thursday skill_level', () => {
    expect(store.getState().meals).toEqual(initialState);

    // dispatch the updateVariable action
    store.dispatch(
      updateVariable({
        weekday: Weekdays.Thursday,
        variable: Variables.skill_level,
        value: 0,
      })
    );

    // now the time value for Monday breakfast should be updated to 3
    expect(
      store.getState().meals.meals.breakfast.days[Weekdays.Thursday].skill_level
    ).toEqual(0);
  });

  it("updates friday's lunch time", () => {
    expect(store.getState().meals).toEqual(initialState);

    store.dispatch(changeMeal(Meals.lunch));

    // dispatch the updateVariable action
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
    expect(store.getState().meals).toEqual(initialState);

    store.dispatch(changeMeal(Meals.dinner));

    // dispatch the updateVariable action
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
