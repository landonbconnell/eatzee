import React from 'react';
import { Slider, Typography, Stack } from '@mui/material';

interface DiscreteSliderProps {
  header?: string;
  value: number;
  labels: string[];
  onChange: (event, newValue) => void;
}

const DiscreteSlider = ({
  header,
  value,
  labels,
  onChange,
}: DiscreteSliderProps) => {
  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ width: '100%' }}
    >
      {header && (
        <Typography variant='h6' align='center' sx={{ fontWeight: 'bold' }}>
          {header}
        </Typography>
      )}
      <Slider
        marks={[
          { value: 0, label: labels[0] },
          { value: 1, label: labels[1] },
          { value: 2, label: labels[2] },
          { value: 3, label: labels[3] },
          { value: 4, label: labels[4] },
        ]}
        defaultValue={2}
        value={value}
        onChange={onChange}
        step={1}
        min={0}
        max={4}
        sx={{
          margin: '0 1rem 2.5rem 1rem',
          color: 'secondary.dark',
          width: '80%',
        }}
      />
    </Stack>
  );
};

export default DiscreteSlider;
