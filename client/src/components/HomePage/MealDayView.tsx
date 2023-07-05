import * as React from 'react';
import { Day } from 'models/meals/interfaces/Day';
import { Box, Stack, Typography } from '@mui/material';
import { weekdayToString } from 'utils/weekdayToString';

interface MealDayViewProps {
  day: Day;
}

const MealDayView = ({ day }: MealDayViewProps) => {
  return (
    <Stack direction='column' alignItems='center' justifyContent='center'>
      <Typography
        variant='h6'
        sx={{ color: 'primary.contrastText', marginTop: '1rem' }}
      >
        {weekdayToString(day.weekday)}
      </Typography>
      <Box
        sx={{
          maxWidth: '20rem',
          maxHeight: '15rem',
          borderTopLeftRadius: '2.5rem',
          borderTopRightRadius: '2.5rem',
          border: '1px solid',
          margin: '0rem 2.5rem 0 2.5rem',
          backgroundColor: 'primary.light',
        }}
      />
      <Box
        sx={{
          maxWidth: '20rem',
          maxHeight: '7.5rem',
          borderBottomLeftRadius: '2.5rem',
          borderBottomRightRadius: '2.5rem',
          border: '1px solid',
          margin: '0rem 2.5rem 2.5rem 2.5rem',
          backgroundColor: 'primary.light',
        }}
      />
    </Stack>
  );
};

export default MealDayView;
