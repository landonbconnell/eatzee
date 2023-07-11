import * as React from 'react';
import { Box, Hidden, Stack } from '@mui/material';
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
        backgroundColor: 'secondary.light',
      }}
    >
      <Stack direction='row'>
        <Hidden lgDown>
          <Carousel />
        </Hidden>
        <LogIn />
      </Stack>
    </Box>
  );
};

export default LogInPage;
