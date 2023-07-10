import * as React from 'react';
import { Box } from '@mui/material';
import SignUp from './SignUp';

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
      <SignUp />
    </Box>
  );
};

export default LogInPage;
