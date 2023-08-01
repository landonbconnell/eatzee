import React from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';
import CheckBoxes from './CheckBoxes';
import SeeMoreButton from './SeeMoreButton';

interface CheckBoxStepProps {
  headerText: string;
  values: string[];
  selectedValues: string[];
  visible: number;
  setVisible: (num: number) => void;
  handleChange: (event) => void;
}

const CheckBoxStep = ({
  headerText,
  values,
  selectedValues,
  visible,
  setVisible,
  handleChange,
}: CheckBoxStepProps) => {
  return (
    <Box sx={{ marginBottom: '1rem' }}>
      <Stack direction='column' justifyContent='center' alignItems='center'>
        <Typography
          variant='h5'
          align='center'
          sx={{ fontWeight: 'bold', margin: '0 1rem 0 1rem' }}
        >
          {headerText}
        </Typography>
        <Box
          sx={{
            overflow: 'auto',
            marginTop: '1rem',
            maxHeight: '15rem',
            '&::-webkit-scrollbar': {
              width: '0.5rem', // adjust to control the width of the scrollbar
              color: 'primary.dark', // adjust to control the background color of the scrollbar
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'primary.dark', // adjust to control the color of the scrollbar
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: 'primary.dark', // adjust to control the color of the scrollbar when hovered
            },
          }}
        >
          <Grid container sx={{ marginBottom: '1rem' }}>
            {values.map((value, index) => (
              <CheckBoxes
                key={index}
                name={value}
                index={index}
                onChange={handleChange}
                checked={selectedValues.includes(value)}
              />
            ))}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default CheckBoxStep;
