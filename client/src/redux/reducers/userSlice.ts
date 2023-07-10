import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  dietaryRestrictions: string[];
  allergies: string[];
  skillLevel: number;
}

const initialState: UserState = {
  dietaryRestrictions: [],
  allergies: [],
  skillLevel: 2,
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
    setSkillLevel: (state, action: PayloadAction<number>) => {
      state.skillLevel = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export const { setDietaryRestrictions, setAllergies, setSkillLevel } =
  userSlice.actions;

export default userSlice.reducer;
