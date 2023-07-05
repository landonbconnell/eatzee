import * as React from 'react';
import { Day } from 'redux/reducers/mealsSlice';
import { Box, Stack, Typography } from '@mui/material';

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
        {day.weekday}
      </Typography>
      <Box
        sx={{
          width: '14rem',
          height: '10.5rem',
          borderTopLeftRadius: '1.75rem',
          borderTopRightRadius: '1.75rem',
          border: '1px solid',
          margin: '0rem 1.75rem 0 1.75rem',
          backgroundColor: 'primary.light',
        }}
      />
      <Box
        sx={{
          width: '14rem',
          height: '5.25rem',
          borderBottomLeftRadius: '1.75rem',
          borderBottomRightRadius: '1.75rem',
          border: '1px solid',
          margin: '0rem 1.75rem 1.75rem 1.75rem',
          backgroundColor: 'primary.light',
        }}
      />
    </Stack>
  );
};

export default MealDayView;
