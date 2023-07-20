import React from 'react';
import { Button } from '@mui/material';

interface StyledButtonProps {
  label: string;
  width: string;
  onClick: () => void;
}

const StyledButton = ({ label, width, onClick }: StyledButtonProps) => {
  return (
    <Button
      variant='text'
      onClick={onClick}
      sx={{
        width,
        backgroundColor: 'secondary.dark',
        color: 'primary.light',
        padding: '0.25rem 1rem 0.25rem 1rem',
        marginTop: '0.5rem',
        '&:hover': {
          backgroundColor: 'secondary.light',
        },
      }}
    >
      {label}
    </Button>
  );
};

export default StyledButton;
