import React from 'react';
import { Button } from '@mui/material';

const SeeMoreButton = ({ visible, setVisible }) => (
  <Button
    variant='text'
    onClick={() => setVisible(visible + 4)}
    sx={{
      backgroundColor: 'secondary.dark',
      color: 'primary.light',
      padding: '0.25rem 1rem 0.25rem 1rem',
      marginTop: '0.5rem',
      '&:hover': {
        backgroundColor: 'secondary.light',
      },
    }}
  >
    See More
  </Button>
);

export default SeeMoreButton;