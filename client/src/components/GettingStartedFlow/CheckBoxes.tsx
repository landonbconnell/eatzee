import React from 'react';
import { Grid, FormControlLabel, Checkbox } from '@mui/material';

interface CheckBoxesProps {
  name: string;
  index: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const CheckBoxes = ({ name, index, onChange, checked }: CheckBoxesProps) => (
  <Grid item xs={6} key={index}>
    <FormControlLabel
      control={
        <Checkbox
          onChange={onChange}
          name={name}
          checked={checked}
          sx={{
            '&.Mui-checked': {
              color: 'secondary.dark',
            },
          }}
        />
      }
      label={name}
    />
  </Grid>
);

export default CheckBoxes;
