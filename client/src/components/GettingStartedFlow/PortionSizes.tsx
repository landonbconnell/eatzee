import React from 'react';
import { Stack, Typography } from '@mui/material';
import Selector from 'components/misc/Selector';
import { useDispatch, useSelector } from 'react-redux';
import { setPortionSize } from '../../redux/reducers/userSlice';
import { portionSizeSelector } from 'redux/selectors/userSliceSelectors';

const PortionSizes = () => {
  const dispatch = useDispatch();
  const portionSize = useSelector(portionSizeSelector);

  const handlePortionSizeChange = (portionSize) => {
    dispatch(setPortionSize(portionSize));
  };

  return (
    <Stack direction='column' justifyContent='center' alignItems='center'>
      <Typography
        variant='h5'
        align='center'
        sx={{ margin: '0 1rem 4.5rem 1rem' }}
        fontWeight='bold'
      >
        How many people do you typically cook for?
      </Typography>
      <Selector
        labels={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        value={portionSize}
        handleChange={handlePortionSizeChange}
      />
    </Stack>
  );
};

export default PortionSizes;
