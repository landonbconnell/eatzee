import React from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';
import CheckBoxes from './CheckBoxes';
import SeeMoreButton from './SeeMoreButton';
import ScrollableBox from 'components/misc/ScrollableBox';

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
        <ScrollableBox maxHeight='22rem'>
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
        </ScrollableBox>
      </Stack>
    </Box>
  );
};

export default CheckBoxStep;
