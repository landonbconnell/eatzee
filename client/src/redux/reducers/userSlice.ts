import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export enum DietaryRestrictions {
  Gluten_Free = 'Gluten Free',
  Low_Carb = 'Low Carb',
  Organic = 'Organic',
  Non_GMO = 'Non GMO',
  Vegetarian = 'Vegetarian',
  Dairy_Free = 'Dairy-Free',
  Vegan = 'Vegan',
  Keto = 'Keto',
  Paleo = 'Paleo',
  High_Protein = 'High Protein',
  Sugar_Free = 'Sugar Free',
  Low_Fat = 'Low Fat',
  Pescatarian = 'Pescatarian',
  Low_Sodium = 'Low Sodium',
  Whole30 = 'Whole30',
  Kosher = 'Kosher',
  Halal = 'Halal',
  Raw = 'Raw',
  Low_FODMAP = 'Low FODMAP',
}

export enum Allergies {
  Peanuts = 'Peanuts',
  Tree_Nuts = 'Tree Nuts',
  Shellfish = 'Shellfish',
  Fish = 'Fish',
  Soy = 'Soy',
  Wheat = 'Wheat',
  Eggs = 'Eggs',
  Milk = 'Milk',
  Sesame = 'Sesame',
  Sulfites = 'Sulfites',
  Mustard = 'Mustard',
  Celery = 'Celery',
  Lupin = 'Lupin',
  Molluscs = 'Molluscs',
}

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
