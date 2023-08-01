import React, { useState } from 'react';
import { Box, MobileStepper } from '@mui/material';
import { useTheme } from '@mui/system';
import { Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import GettingStarted from './GettingStarted';
import CenterBox from 'components/misc/CenterBox';
import Diet from './Diet';
import Allergies from './Allergies';
import CookingSkill from './CookingSkill';
import CookingEquipment from './CookingEquipment';
import Review from './Review';
import { updateUserData } from 'api/user';
import { useNavigate } from 'react-router-dom';
import { userSettingsSelector } from 'redux/selectors/userSliceSelectors';
import { useSelector } from 'react-redux';

const GettingStartedFlowSteps = [
  <GettingStarted />,
  <CookingSkill />,
  <CookingEquipment />,
  <Diet />,
  <Allergies />,
  <Review />,
];

interface ArrowButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const ArrowButton = ({ onClick, disabled, children }: ArrowButtonProps) => (
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
  const navigate = useNavigate();
  const userSettings = useSelector(userSettingsSelector);

  const handleSave = () => {
    const data = {
      id: userSettings.id,
      data: {
        dietaryRestrictions: userSettings.dietaryRestrictions,
        allergies: userSettings.allergies,
        skillLevel: userSettings.skillLevel,
        cookingEquipment: userSettings.cookingEquipment,
      },
    };

    updateUserData(data)
      .then(() => navigate('/home'))
      .catch((err) => console.log(err));
  };

  const theme = useTheme();

  const GettingStartedBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '25rem',
    minWidth: '20rem',
    maxWidth: '25rem',
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
            activeStep === 5 ? (
              <ArrowButton onClick={handleSave}>
                Save
                <KeyboardArrowRight sx={{ paddingBottom: '0.25rem' }} />
              </ArrowButton>
            ) : (
              <ArrowButton onClick={handleNext}>
                Next
                <KeyboardArrowRight sx={{ paddingBottom: '0.25rem' }} />
              </ArrowButton>
            )
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
