import React from 'react';
import { StepIcon } from '@mui/material';

const CustomStepIcon = ({ active, ...props }) => {
  return (
    <StepIcon
      {...props}
      icon={''}
      sx={{
        color: active ? 'secondary.dark' : 'primary.main',
      }}
    />
  );
};

export default CustomStepIcon;
