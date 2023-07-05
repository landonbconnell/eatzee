import { configureStore } from '@reduxjs/toolkit';
import mealsReducer, { changeMeal } from 'redux/reducers/mealsSlice';
import { Meals } from 'models/meals/enums/Meals';
import { mealsInitialState } from 'models/meals/mealsInitialState';

describe('update variables reducer', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { meals: mealsReducer } });
  });

  it('changes meal to lunch', () => {
    expect(store.getState().meals).toEqual(mealsInitialState);

    store.dispatch(changeMeal(Meals.lunch));

    expect(store.getState().meals.currentMeal).toEqual(Meals.lunch);
  });

  it('changes meal to dinner', () => {
    expect(store.getState().meals).toEqual(mealsInitialState);

    store.dispatch(changeMeal(Meals.dinner));

    expect(store.getState().meals.currentMeal).toEqual(Meals.dinner);
  });

  it('current meal stays the same when meal is changed to breakfast', () => {
    expect(store.getState().meals).toEqual(mealsInitialState);

    store.dispatch(changeMeal(Meals.breakfast));

    expect(store.getState().meals.currentMeal).toEqual(Meals.breakfast);
  });
});
