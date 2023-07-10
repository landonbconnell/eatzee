import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './reducers/mealsSlice';
import authReducer from './reducers/authSlice';
import userReducer from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    meals: mealsReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
