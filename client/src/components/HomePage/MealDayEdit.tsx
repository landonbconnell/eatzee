import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { Day } from 'models/meals/interfaces/Day';
import { weekdayToString } from 'utils/weekdayToString';
import VariableStepper from './VariableStepper';
import { Variables } from 'models/meals/enums/Variables';

const dayTypographyStyles = {
  color: 'primary.contrastText',
  marginTop: '1rem',
};

const mealDayEditBoxStyles = {
  minWidth: '20rem',
  maxWidth: '20rem',
  minHeight: '22.5rem',
  maxHeight: '22.5rem',
  overflowY: 'auto',
  borderTopLeftRadius: '2.5rem',
  borderBottomLeftRadius: '2.5rem',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  margin: '0rem 2.5rem 2.5rem 2.5rem',
  backgroundColor: 'primary.light',
};

interface MealDayEditProps {
  day: Day;
}

const MealDayEdit = ({ day }: MealDayEditProps) => {
  return (
    <Stack direction='column' alignItems='center' justifyContent='center'>
      <Typography variant='h6' sx={dayTypographyStyles}>
        {weekdayToString(day.weekday)}
      </Typography>
      <Box sx={mealDayEditBoxStyles}>
        <VariableStepper
          weekday={day.weekday}
          variable={Variables.time}
          labels={[
            "I'm hungry now",
            '',
            'I have some time',
            '',
            'I have all day',
          ]}
        />
        <VariableStepper
          weekday={day.weekday}
          variable={Variables.budget}
          labels={['$', '', '$$', '', '$$$']}
        />
        <VariableStepper
          weekday={day.weekday}
          variable={Variables.food_mood}
          labels={['', '', '', '', '']}
        />
        <VariableStepper
          weekday={day.weekday}
          variable={Variables.skill_level}
          labels={['', '', '', '', '']}
        />
      </Box>
    </Stack>
  );
};

export default MealDayEdit;
