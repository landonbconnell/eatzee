import React from 'react';
import { Box, Grid, Stack } from '@mui/material';
import WeekVariableStepper from './WeekVariableStepper';
import { Variables, Weekdays } from 'models/meals/enums';

const mealWeekEditBoxStyles = {
  width: '60rem',
  minWidth: '20rem',
  maxWidth: '60rem',
  height: '40rem',
  minHeight: '22.5rem',
  maxHeight: '40rem',
  overflowY: 'auto',
  borderRadius: '2.5rem',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  padding: '2rem',
  backgroundColor: 'primary.light',
};

const MealWeekEdit = () => {
  return (
    <Grid container sx={mealWeekEditBoxStyles}>
      <Grid item xs={6}>
        <Box
          sx={{
            paddingRight: '2rem',
            height: '100%',
            width: '100%',
            border: '1px solid black',
          }}
        >
          <WeekVariableStepper
            variable={Variables.time}
            labels={['', '', '', '', '']}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            paddingLeft: '2rem',
            height: '100%',
            width: '100%',
            border: '1px solid black',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default MealWeekEdit;
