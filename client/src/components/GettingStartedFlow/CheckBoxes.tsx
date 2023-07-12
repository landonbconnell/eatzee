import React from 'react';
import { Grid, FormControlLabel, Checkbox } from '@mui/material';

const CheckBoxes = ({ name, index, onChange }) => (
  <Grid item xs={6} key={index}>
    <FormControlLabel
      control={
        <Checkbox
          onChange={onChange}
          name={name}
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
