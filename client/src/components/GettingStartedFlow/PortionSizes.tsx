import React from 'react';
import { Stack, Typography } from '@mui/material';
import PortionSelector from './PortionSelector';

const PortionSizes = () => (
  <Stack direction='column' justifyContent='center' alignItems='center'>
    <Typography
      variant='h5'
      align='center'
      sx={{ margin: '0 1rem 4.5rem 1rem' }}
      fontWeight='bold'
    >
      How many people do you typically cook for?
    </Typography>
    <PortionSelector />
  </Stack>
);

export default PortionSizes;
