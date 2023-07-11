import React, { useState } from 'react';
import { Box, MobileStepper } from '@mui/material';
import { useTheme } from '@mui/system';
import { Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import GettingStarted from './GettingStarted';

const GettingStartedFlowSteps = [<GettingStarted />];

const GettingStartedFlow = () => {
  const theme = useTheme();

  const GettingStartedBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: '20rem',
    maxWidth: '30rem',
    minHeight: '25rem',
    padding: '2rem',
    borderRadius: '2.5rem',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    backgroundColor: 'primary.light',
    [theme.breakpoints.down('sm')]: {
      minWidth: '10rem',
      maxWidth: '20rem',
      padding: '1rem',
    },
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'secondary.light',
      }}
    >
      <Box sx={GettingStartedBoxStyles}>
        {GettingStartedFlowSteps[activeStep]}
        <MobileStepper
          variant='dots'
          steps={6}
          position='static'
          activeStep={activeStep}
          sx={{
            maxWidth: '100%',
            width: '100%',
            backgroundColor: 'primary.light',
            color: 'secondary.dark',
            '& .MuiMobileStepper-dotActive': {
              backgroundColor: 'secondary.dark',
            },
          }}
          nextButton={
            <Button
              size='small'
              onClick={handleNext}
              disabled={activeStep === 5}
              sx={{ color: 'secondary.dark' }}
            >
              Next
              <KeyboardArrowRight sx={{ paddingBottom: '0.25rem' }} />
            </Button>
          }
          backButton={
            <Button
              size='small'
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ color: 'secondary.dark' }}
            >
              <KeyboardArrowLeft sx={{ paddingBottom: '0.25rem' }} />
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
};

export default GettingStartedFlow;
