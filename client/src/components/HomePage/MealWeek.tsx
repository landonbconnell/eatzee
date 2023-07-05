import * as React from 'react';
import MealDayView from './MealDayView';
import MealDayEdit from './MealDayEdit';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { daysSelector } from 'redux/selectors/daysSelector';

const MealWeek = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md')); // 'md' stands for medium screens
  const daysPerRow = matches ? 2 : 1; // display 3 meal days per line on large screens, 1 on small screens

  const days = useSelector(daysSelector);

  // Create a helper function to divide your data into chunks
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  // Divide your days into chunks
  const daysChunks = chunk(days, daysPerRow);

  return (
    <Stack direction='column' alignItems='center' justifyContent='center'>
      {daysChunks.map((daysChunk, i) => (
        <Stack
          key={i}
          direction='row'
          justifyContent='space-evenly'
          alignItems='center'
        >
          {daysChunk.map((day, index) =>
            day.edit ? (
              <MealDayEdit key={index} day={day} />
            ) : (
              <MealDayView key={index} day={day} />
            )
          )}
        </Stack>
      ))}
    </Stack>
  );
};

export default MealWeek;
