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
  skillLevel: 2,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDietaryRestrictions: (
      state,
      action: PayloadAction<DietaryRestrictions[]>
    ) => {
      state.dietaryRestrictions = action.payload;
    },
    setAllergies: (state, action: PayloadAction<Allergies[]>) => {
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
