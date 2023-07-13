import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCookingEquipment,
  removeCookingEquipment,
} from 'redux/reducers/userSlice';
import { Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';

const CookingEquipment = () => {
  return (
    <Stack direction='column' justifyContent='center' alignItems='center'>
      <Typography
        variant='h5'
        align='center'
        sx={{ margin: '0 1rem 4.5rem 1rem' }}
      >
        What cooking equipment do you have?
      </Typography>
    </Stack>
  );
};

export default CookingEquipment;
