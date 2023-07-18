import React from 'react';
import {
  Stack,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { userSettingsSelector } from 'redux/selectors/userSliceSelectors';
import { setPortionSize } from 'redux/reducers/userSlice';

const Review = () => {
  const dispatch = useDispatch();
  const userSettings = useSelector(userSettingsSelector);

  return (
    <Stack direction='column' justifyContent='center' alignItems='center'>
      <Typography
        variant='h5'
        align='center'
        sx={{ margin: '0 1rem 4.5rem 1rem' }}
        fontWeight='bold'
      >
        Dietary Restrictions
      </Typography>
    </Stack>
  );
};

export default Review;
