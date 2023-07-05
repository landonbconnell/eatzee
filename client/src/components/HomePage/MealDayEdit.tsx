import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { Day } from 'redux/reducers/mealsSlice';

interface MealDayEditProps {
  day: Day;
}

const MealDayEdit = ({ day }: MealDayEditProps) => {
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
          height: '15.75rem',
          borderRadius: '1.75rem',
          border: '1px solid',
          margin: '0rem 1.75rem 1.75rem 1.75rem',
          backgroundColor: 'primary.light',
        }}
      />
    </Stack>
  );
};

export default MealDayEdit;
