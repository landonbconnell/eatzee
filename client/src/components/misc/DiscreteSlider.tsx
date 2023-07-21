import React from 'react';
import { Slider, Typography, Stack } from '@mui/material';

interface DiscreteSliderProps {
  header?: string;
  value: number;
  startLabel: string;
  endLabel: string;
  onChange: (event, newValue) => void;
}

const DiscreteSlider = ({
  header,
  value,
  startLabel,
  endLabel,
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
          { value: 0, label: startLabel },
          { value: 1 },
          { value: 2 },
          { value: 3 },
          { value: 4, label: endLabel },
        ]}
        defaultValue={2}
        value={value}
        onChange={onChange}
        step={1}
        min={0}
        max={4}
        sx={{
          margin: '1rem',
          color: 'secondary.dark',
          width: '80%',
        }}
      />
    </Stack>
  );
};

export default DiscreteSlider;
