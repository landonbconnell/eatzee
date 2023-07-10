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
  const isMobile = useMediaQuery('(max-width: 829px)');
  const isSmall = useMediaQuery('(min-width: 830px) and (max-width: 1249px)');
  const isMedium = useMediaQuery('(min-width: 1250px) and (max-width: 1629px)');
  const isLarge = useMediaQuery('(min-width: 1630px)');

  let daysPerRow;

  if (isLarge) {
    daysPerRow = 4;
  } else if (isMedium) {
    daysPerRow = 3;
  } else if (isSmall) {
    daysPerRow = 2;
  } else if (isMobile) {
    daysPerRow = 1;
  }

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
