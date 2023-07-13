import React from 'react';
import {
  Stack,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { portionSizeSelector } from 'redux/selectors/userSliceSelectors';
import { setPortionSize } from 'redux/reducers/userSlice';

const PortionSizes = () => {
  const dispatch = useDispatch();
  const portionSize = useSelector(portionSizeSelector);
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = (number) => {
    dispatch(setPortionSize(number));
  };

  return (
    <Stack direction='column' justifyContent='center' alignItems='center'>
      <Typography
        variant='h5'
        align='center'
        sx={{ margin: '0 1rem 4.5rem 1rem' }}
      >
        How many people do you typically cook for?
      </Typography>
      <FormControl sx={{ width: '15rem' }}>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={portionSize}
          onChange={(event) => handleChange(event.target.value)}
        >
          {labels.map((number) => (
            <MenuItem key={number} value={number}>
              {number}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default PortionSizes;
