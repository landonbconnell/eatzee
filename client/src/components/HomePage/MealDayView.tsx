import React, { useState } from 'react';
import { Day } from 'models/meals/interfaces';
import { Box, Stack, Typography, Button } from '@mui/material'; // Add Dialog and IconButton imports

import { weekdayToString } from 'utils/weekdayToString';
import Recipe from './Recipe';

interface MealDayViewProps {
  day: Day;
}

const MealDayView = ({ day }: MealDayViewProps) => {
  // Define state for dialog open status
  const [open, setOpen] = useState(false);

  // Function to handle opening of dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle closing of dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ m: '0rem 1.75rem 1.5rem 1.75rem' }}
    >
      <Typography
        variant='h6'
        sx={{ color: 'primary.contrastText', marginTop: '1rem' }}
      >
        {weekdayToString(day.weekday)}
      </Typography>
      <Box
        sx={{
          width: '14rem',
          height: '10rem',
          borderTopLeftRadius: '2.5rem',
          borderTopRightRadius: '2.5rem',
          boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
          backgroundColor: 'primary.light',
          backgroundImage: `url(${day.dish!.image})`,
          backgroundSize: 'cover', // Make sure the image covers the entire box
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Do not repeat the image
        }}
      />
      <Box
        sx={{
          width: '14rem',
          height: '7rem',
          borderBottomLeftRadius: '2.5rem',
          borderBottomRightRadius: '2.5rem',
          boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',

          backgroundColor: 'primary.light',
        }}
      >
        <Stack direction='column' spacing={2}>
          <Typography
            variant='body1'
            sx={{
              color: 'primary.contrastText',
              textAlign: 'center',
              padding: '0.5rem 1rem 0.5rem 1rem',
            }}
          >
            {day.dish!.name}
          </Typography>
          <Button
            variant='text'
            sx={{ color: 'secondary.dark', textTransform: 'none' }}
            onClick={handleOpen} // Add onClick handler
          >
            See Recipe
          </Button>
          <Recipe dish={day.dish!} open={open} handleClose={handleClose} />
        </Stack>
      </Box>
    </Stack>
  );
};

export default MealDayView;
