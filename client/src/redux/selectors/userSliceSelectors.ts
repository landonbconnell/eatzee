export const idSelector = (state) => state.user.id;

export const skillLevelSelector = (state) => state.user.skillLevel;

export const dietaryRestrictionsSelector = (state) =>
  state.user.dietaryRestrictions;

export const allergiesSelector = (state) => state.user.allergies;

export const cookingEquipmentSelector = (state) => state.user.cookingEquipment;

export const portionSizeSelector = (state) => state.user.portionSize;

export const userSettingsSelector = (state) => state.user;
