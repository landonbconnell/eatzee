import React from 'react';
import { LoadingButton } from '@mui/lab';

interface StyledLoadingButtonProps {
  isLoading: boolean;
  label: string;
  width: string;
  onClick: () => void;
}

const StyledLoadingButton = ({
  isLoading,
  label,
  width,
  onClick,
}: StyledLoadingButtonProps) => {
  return (
    <LoadingButton
      onClick={onClick}
      loading={isLoading}
      variant='contained'
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
    </LoadingButton>
  );
};

export default StyledLoadingButton;
