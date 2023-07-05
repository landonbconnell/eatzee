import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { Day, Variables } from 'redux/reducers/mealsSlice';
import { weekdayToString } from 'utils/weekdayToString';
import VariableStepper from './VariableStepper';

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
        {weekdayToString(day.weekday)}
      </Typography>
      <Box
        sx={{
          minWidth: '20rem',
          minHeight: '22.5rem',
          maxWidth: '20rem',
          maxHeight: '22.5rem',
          borderRadius: '2.5rem',
          border: '1px solid',
          margin: '0rem 2.5rem 2.5rem 2.5rem',
          backgroundColor: 'primary.light',
        }}
      >
        <VariableStepper
          weekday={day.weekday}
          variable={Variables.budget}
          labels={['$', '$$', '$$$']}
        />
      </Box>
    </Stack>
  );
};

export default MealDayEdit;
