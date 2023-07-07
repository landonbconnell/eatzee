import * as React from 'react';
import { Box, Stack } from '@mui/material';
import Carousel from './Carousel';
import LogIn from './LogIn';

const LogInPageBoxStyles = {
  minWidth: '20rem',
  maxWidth: '20rem',
  minHeight: '22.5rem',
  maxHeight: '22.5rem',
  overflow: 'hidden', // hide both horizontal and vertical overflow
  borderTopLeftRadius: '2.5rem',
  borderBottomLeftRadius: '2.5rem',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  margin: '0rem 2.5rem 2.5rem 2.5rem',
  backgroundColor: 'primary.light',
};

const LogInPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw', // 100% of the viewport width
        height: '100vh', // 100% of the viewport height
      }}
    >
      <Box sx={LogInPageBoxStyles}>
        <Stack direction='row'>
          <Carousel />
          <LogIn />
        </Stack>
      </Box>
    </Box>
  );
};

export default LogInPage;
