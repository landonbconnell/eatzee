import React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';

interface SelectorProps {
  header?: string;
  width?: string;
  labels: number[];
  value: number;
  handleChange: (value: number) => void;
}

const NumberSelector = ({
  header,
  width,
  labels,
  value,
  handleChange,
}: SelectorProps) => {
  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ mb: '1.25rem' }}
    >
      {header && (
        <Typography
          variant='h6'
          align='center'
          sx={{ fontWeight: 'bold', mb: '0.25rem' }}
        >
          {header}
        </Typography>
      )}
      <FormControl sx={{ width, maxWidth: width }}>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          onChange={(event) => handleChange(Number(event.target.value))}
        >
          {labels.map((label, index) => (
            <MenuItem key={index} value={label}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default NumberSelector;
