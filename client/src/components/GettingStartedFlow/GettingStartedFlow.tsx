import React, { useState } from 'react';
import { Box, MobileStepper } from '@mui/material';
import { useTheme } from '@mui/system';
import { Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import GettingStarted from './GettingStarted';
import CenterBox from 'components/misc/CenterBox';
import DietAndAllergies from './DietAndAllergies';
import CookingSkill from './CookingSkill';

const GettingStartedFlowSteps = [
  <GettingStarted />,
  <DietAndAllergies />,
  <CookingSkill />,
];

const ArrowButton = ({ onClick, disabled, children }) => (
  <Button
    size='small'
    onClick={onClick}
    disabled={disabled}
    sx={{ color: 'secondary.dark' }}
  >
    {children}
  </Button>
);

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
    overflow: 'auto',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    backgroundColor: 'primary.light',
    [theme.breakpoints.down('sm')]: {
      minWidth: '10rem',
      maxWidth: '20rem',
      padding: '1rem',
      borderRadius: '1.5rem',
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
    <CenterBox>
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
            <ArrowButton onClick={handleNext} disabled={activeStep === 5}>
              Next
              <KeyboardArrowRight sx={{ paddingBottom: '0.25rem' }} />
            </ArrowButton>
          }
          backButton={
            <ArrowButton onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft sx={{ paddingBottom: '0.25rem' }} />
              Back
            </ArrowButton>
          }
        />
      </Box>
    </CenterBox>
  );
};

export default GettingStartedFlow;
