import axios from 'axios';

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
  return axios.put('http://localhost:5000/api/users/update', data);
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
  return axios.post('http://localhost:5000/api/openai/generateMealPlan', data);
};
