import React from 'react';
import Header from './Header';
import { Stack } from '@mui/material';
import MealWeekView from './MealWeekView';
import MealWeekEdit from './MealWeekEdit';
import { useSelector } from 'react-redux';
import { editModeSelector } from 'redux/selectors/mealsSelector';

const HomePage = () => {
  const isEditMode = useSelector(editModeSelector);

  return (
    <Stack direction='column'>
      <Header />
      <Stack direction='row' justifyContent='center' alignItems='center'>
        {isEditMode ? <MealWeekEdit /> : <MealWeekView />}
      </Stack>
    </Stack>
  );
};

export default HomePage;
