import { configureStore } from '@reduxjs/toolkit';
import mealsReducer, { changeMeal, Meals } from 'redux/reducers/mealsSlice';
import { initialState } from './models/initialState';

describe('update variables reducer', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { meals: mealsReducer } });
  });

  it('changes meal to lunch', () => {
    expect(store.getState().meals).toEqual(initialState);

    store.dispatch(changeMeal(Meals.lunch));

    expect(store.getState().meals.currentMeal).toEqual(Meals.lunch);
  });

  it('changes meal to dinner', () => {
    expect(store.getState().meals).toEqual(initialState);

    store.dispatch(changeMeal(Meals.dinner));

    expect(store.getState().meals.currentMeal).toEqual(Meals.dinner);
  });

  it('current meal stays the same when meal is changed to breakfast', () => {
    expect(store.getState().meals).toEqual(initialState);

    store.dispatch(changeMeal(Meals.breakfast));

    expect(store.getState().meals.currentMeal).toEqual(Meals.breakfast);
  });
});
