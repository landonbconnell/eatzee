import React from 'react';
import Header from './Header';
import { Stack } from '@mui/material';
import MealWeek from './MealWeek';

const HomePage = () => {
  return (
    <Stack direction='column'>
      <Header />
      <Stack direction='row' justifyContent='center' alignItems='center'>
        <MealWeek />
      </Stack>
    </Stack>
  );
};

export default HomePage;
