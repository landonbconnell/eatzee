import axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export interface updateUserDataParams {
  id: string;
  data: {
    dietaryRestrictions: string[];
    allergies: string[];
    skillLevel: number;
    cookingEquipment: string[];
  };
}

export const updateUserData = (data: updateUserDataParams) => {
  return axios.put(`${REACT_APP_API_URL}/api/users/update`, data);
};

export interface generateMealPlanParams {
  id: string;
  data: {
    currentMeal: string;
    weekdays: string[];
    time: string;
    budget: string;
    foodMood: string;
    cuisines: string[];
    portions: number;
  };
}

export const generateMealPlan = (data: generateMealPlanParams) => {
  return axios.post(`${REACT_APP_API_URL}/api/openai/generateMealPlan`, data);
};
