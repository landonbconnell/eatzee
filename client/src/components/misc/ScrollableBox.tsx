import React from 'react';
import { Box } from '@mui/material';

interface ScrollableBoxProps {
  children: React.ReactNode;
  maxHeight: string;
}

const ScrollableBox = ({ children, maxHeight }: ScrollableBoxProps) => {
  return (
    <Box
      sx={{
        overflow: 'auto',
        marginTop: '1rem',
        width: '100%',
        maxHeight,
        '&::-webkit-scrollbar': {
          width: '0.5rem',
          color: 'primary.dark',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'primary.dark',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'primary.dark',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ScrollableBox;
