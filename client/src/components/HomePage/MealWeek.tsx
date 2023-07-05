import * as React from 'react';
import MealDay from './MealDay';
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
        {days.map((day, index) => (
          <MealDay key={index} day={day} />
        ))}
      </Stack>
    </Stack>
  );
};

export default MealWeek;
