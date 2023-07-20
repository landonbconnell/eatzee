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
    <Box sx={{ overflow: 'auto', maxHeight: '35rem', marginBottom: '1rem' }}>
      <Stack direction='column' justifyContent='center' alignItems='center'>
        <Typography
          variant='h5'
          align='center'
          sx={{ fontWeight: 'bold', margin: '0 1rem 0 1rem' }}
        >
          {headerText}
        </Typography>
        <Grid container sx={{ margin: '1rem 0 1rem 0' }}>
          {values.slice(0, visible).map((value, index) => (
            <CheckBoxes
              key={index}
              name={value}
              index={index}
              onChange={handleChange}
              checked={selectedValues.includes(value)}
            />
          ))}
        </Grid>
        {visible < values.length && (
          <SeeMoreButton
            visible={visible}
            setVisible={setVisible}
            revealNum={6}
          />
        )}
      </Stack>
    </Box>
  );
};

export default CheckBoxStep;
