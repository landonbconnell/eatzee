import React from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';

interface SelectorProps {
  labels: string[];
  value: string;
  handleChange: (value: string) => void;
}

const StringSelector = ({ labels, value, handleChange }: SelectorProps) => (
  <FormControl sx={{ width: '100%' }}>
    <Select
      labelId='demo-simple-select-label'
      id='demo-simple-select'
      value={value}
      onChange={(event) => handleChange(event.target.value)}
    >
      {labels.map((label, index) => (
        <MenuItem key={index} value={label}>
          {label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default StringSelector;
