import React from 'react';
import { Stack, Typography } from '@mui/material';
import MealTab from './MealTab';
import { Meals } from 'models/meals/enums/Meals';

const Header = () => {
  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ margin: '2.5rem 0 2.5rem 0' }}
    >
      <Typography variant='h4' sx={{ color: 'primary.contrastText' }}>
        Eatzier
      </Typography>
      <Stack
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
        spacing={5}
        sx={{ mt: '1rem' }}
      >
        <MealTab meal={Meals.breakfast} />
        <MealTab meal={Meals.lunch} />
        <MealTab meal={Meals.dinner} />
      </Stack>
    </Stack>
  );
};

export default Header;
