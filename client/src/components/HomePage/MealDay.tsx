import * as React from 'react';
import { Day } from 'redux/reducers/mealsSlice';
import { Box, Stack } from '@mui/material';

interface MealDayProps {
  day: Day;
}

const MealDay = ({ day }: MealDayProps) => {
  return (
    <Stack direction='column' alignItems='center' justifyContent='center'>
      <Box
        sx={{
          width: '14rem', // 20 rem
          height: '10.5rem', // 15 rem
          borderTopLeftRadius: '1.75rem',
          borderTopRightRadius: '1.75rem',
          border: '1px solid',
          margin: '1.75rem 1.75rem 0 1.75rem',
          backgroundColor: 'primary.light',
        }}
      />
      <Box
        sx={{
          width: '14rem', // 20 rem
          height: '5.25rem', // 15 rem
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

export default MealDay;
