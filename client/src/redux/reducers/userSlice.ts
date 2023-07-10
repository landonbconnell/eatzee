import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  dietaryRestrictions: string[];
  allergies: string[];
}

const initialState: UserState = {
  dietaryRestrictions: [],
  allergies: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDietaryRestrictions: (state, action: PayloadAction<string[]>) => {
      state.dietaryRestrictions = action.payload;
    },
    setAllergies: (state, action: PayloadAction<string[]>) => {
      state.allergies = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export const { setDietaryRestrictions, setAllergies } = userSlice.actions;

export default userSlice.reducer;
