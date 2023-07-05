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

    // dispatch the updateVariable action
    store.dispatch(changeMeal(Meals.lunch));

    // now the time value for Monday breakfast should be updated to 3
    expect(store.getState().meals.currentMeal).toEqual(Meals.lunch);
  });

  it('changes meal to dinner', () => {
    expect(store.getState().meals).toEqual(initialState);

    // dispatch the updateVariable action
    store.dispatch(changeMeal(Meals.dinner));

    // now the time value for Monday breakfast should be updated to 3
    expect(store.getState().meals.currentMeal).toEqual(Meals.dinner);
  });

  it('current meal stays the same when meal is changed to breakfast', () => {
    expect(store.getState().meals).toEqual(initialState);

    // dispatch the updateVariable action
    store.dispatch(changeMeal(Meals.breakfast));

    // now the time value for Monday breakfast should be updated to 3
    expect(store.getState().meals.currentMeal).toEqual(Meals.breakfast);
  });
});
