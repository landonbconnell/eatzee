import * as React from 'react';
import { Box } from '@mui/material';

const CenterBox = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      //backgroundColor: 'secondary.light',
      background:
        'linear-gradient(180deg, rgba(163,185,220,1) 0%, rgba(52,86,139,1) 100%)',
    }}
  >
    {children}
  </Box>
);

export default CenterBox;
