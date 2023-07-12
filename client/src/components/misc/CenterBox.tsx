import * as React from 'react';
import { Box } from '@mui/material';

const CenterBox = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'secondary.light',
    }}
  >
    {children}
  </Box>
);

export default CenterBox;
