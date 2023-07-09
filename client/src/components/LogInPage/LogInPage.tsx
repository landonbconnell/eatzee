import * as React from 'react';
import { Box, Stack } from '@mui/material';
import Carousel from './Carousel';
import LogIn from './LogIn';

const LogInPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Stack direction='row'>
        <Carousel />
        <LogIn />
      </Stack>
    </Box>
  );
};

export default LogInPage;
