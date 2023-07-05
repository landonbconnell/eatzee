import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { mealToString } from 'utils/mealToString';
import { currentMealSelector } from 'redux/selectors/currentMealSelector';
import { changeMeal } from 'redux/reducers/mealsSlice';
import { Meals } from 'models/meals/enums/Meals';

interface MealTabProps {
  meal: Meals;
}

const MealTab = ({ meal }: MealTabProps) => {
  const dispatch = useDispatch();
  const currentMeal = useSelector(currentMealSelector);

  return (
    <Typography
      variant='h6'
      onClick={() => dispatch(changeMeal(meal))}
      sx={{
        color: 'primary.contrastText',
        cursor: 'pointer', // Changes the cursor to a hand on hover
        textDecoration: meal === currentMeal ? 'underline' : 'none', // Underline if this meal is the selected one
        '&:hover': {
          color: 'secondary.main', // Changes the text color on hover
        },
      }}
    >
      {mealToString(meal)}
    </Typography>
  );
};

export default MealTab;
