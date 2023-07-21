import axios from 'axios';

interface updateUserDataParams {
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
