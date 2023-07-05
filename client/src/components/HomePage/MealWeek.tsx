import * as React from 'react';
import MealDayView from './MealDayView';
import MealDayEdit from './MealDayEdit';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { daysSelector } from 'redux/selectors/daysSelector';

const MealWeek = () => {
  const days = useSelector(daysSelector);

  return (
    <Stack
      direction='column'
      alignItems='center'
      justifyContent='center'
      // sx={{
      //     maxWidth: '60rem'
      // }}
    >
      <Stack direction='row' justifyContent='space-evenly' alignItems='center'>
        {days.map((day, index) =>
          day.edit ? (
            <MealDayEdit key={index} day={day} />
          ) : (
            <MealDayView key={index} day={day} />
          )
        )}
      </Stack>
    </Stack>
  );
};

export default MealWeek;
