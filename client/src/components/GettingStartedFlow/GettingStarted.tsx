import * as React from 'react';
import { Stack, Typography } from '@mui/material';

const GettingStarted = () => {
  return (
    <Stack direction='column' alignItems='center' justifyContent='center'>
      <Typography
        variant='h5'
        sx={{ padding: '1rem 0 1rem 0', fontWeight: 'bold' }}
      >
        Getting To Know You
      </Typography>
      <Typography paragraph sx={{ padding: '0 1rem 0 1rem' }}>
        We are very excited for you to get started, but first, we need to learn
        a little bit about you! This will help us tailer Eatzier to your unique
        lifestyle. Your responses will be kept private and will only be used to
        enhance your experience with us.
      </Typography>
    </Stack>
  );
};

export default GettingStarted;
