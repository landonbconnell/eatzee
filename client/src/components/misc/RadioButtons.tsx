import React from 'react';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

interface RadioButtonsProps {
  value: string | number;
  labels: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButtons = ({ value, labels, onChange }: RadioButtonsProps) => {
  return (
    <FormControl>
      <RadioGroup value={value} onChange={onChange}>
        {labels.map((label, index) => (
          <FormControlLabel
            key={index}
            value={index}
            control={
              <Radio sx={{ '&.Mui-checked': { color: 'secondary.dark' } }} />
            }
            label={label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtons;
