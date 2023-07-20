import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  DietaryRestrictions,
  Allergies,
  CookingEquipment,
} from '../../models/user/enums';

// create another enum for Dietary Restrictions, but
export interface UserState {
  dietaryRestrictions: DietaryRestrictions[];
  allergies: Allergies[];
  skillLevel: number;
  cookingEquipment: CookingEquipment[];
}

const initialState: UserState = {
  dietaryRestrictions: [],
  allergies: [],
  skillLevel: 1,
  cookingEquipment: [],
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
    addCookingEquipment: (state, action: PayloadAction<CookingEquipment>) => {
      state.cookingEquipment = [...state.cookingEquipment, action.payload];
    },
    removeCookingEquipment: (
      state,
      action: PayloadAction<CookingEquipment>
    ) => {
      state.cookingEquipment = state.cookingEquipment.filter(
        (equipment) => action.payload !== equipment
      );
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
  addCookingEquipment,
  removeCookingEquipment,
} = userSlice.actions;

export default userSlice.reducer;
