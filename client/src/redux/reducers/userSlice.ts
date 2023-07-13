import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DietaryRestrictions, Allergies } from '../../models/user/enums';

// create another enum for Dietary Restrictions, but
export interface UserState {
  dietaryRestrictions: DietaryRestrictions[];
  allergies: Allergies[];
  skillLevel: number;
}

const initialState: UserState = {
  dietaryRestrictions: [],
  allergies: [],
  skillLevel: 1,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addDietaryRestriction: (
      state,
      action: PayloadAction<DietaryRestrictions>
    ) => {
      state.dietaryRestrictions = [
        ...state.dietaryRestrictions,
        action.payload,
      ];
    },
    removeDietaryRestriction: (
      state,
      action: PayloadAction<DietaryRestrictions>
    ) => {
      state.dietaryRestrictions = state.dietaryRestrictions.filter(
        (restriction) => action.payload !== restriction
      );
    },
    addAllergy: (state, action: PayloadAction<Allergies>) => {
      state.allergies = [...state.allergies, action.payload];
    },
    removeAllergy: (state, action: PayloadAction<Allergies>) => {
      state.allergies = state.allergies.filter(
        (allergy) => action.payload !== allergy
      );
    },
    setSkillLevel: (state, action: PayloadAction<number>) => {
      state.skillLevel = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  addDietaryRestriction,
  removeDietaryRestriction,
  addAllergy,
  removeAllergy,
  setSkillLevel,
} = userSlice.actions;

export default userSlice.reducer;
