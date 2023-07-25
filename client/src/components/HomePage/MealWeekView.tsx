import * as React from 'react';
import MealDayView from './MealDayView';
import MealDayEdit from './MealDayEdit';
import { useSelector } from 'react-redux';
import { Box, Stack, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { daysSelector } from 'redux/selectors/daysSelector';
import Header from './Header';

const MealWeekView = () => {
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
  const theme = useTheme();

  // Create a helper function to divide your data into chunks
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  // Divide your days into chunks
  const daysChunks = chunk(days, daysPerRow);

  const mealWeekEditBoxStyles = {
    width: '100%',
    maxWidth: '100rem',
    maxHeight: '100rem',
    overflowY: 'auto',
    borderRadius: '2.5rem',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    padding: '2rem',
    backgroundColor: 'primary.light',
    marginLeft: '2rem',
    marginRight: '2rem',
    mt: 2,
    mb: 2,
    [theme.breakpoints.down(840)]: {
      minWidth: '16rem',
      maxWidth: '30rem',
      padding: '1rem',
      borderRadius: '1.5rem',
    },
  };

  return (
    <Box sx={mealWeekEditBoxStyles}>
      <Header />
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
    </Box>
  );
};

export default MealWeekView;
