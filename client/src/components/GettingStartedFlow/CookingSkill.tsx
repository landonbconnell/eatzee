import React from 'react';
import {
  Stack,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepIcon,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSkillLevel } from 'redux/reducers/userSlice';
import { skillLevelSelector } from 'redux/selectors/userSliceSelectors';

const CustomStepIcon = ({ active, ...props }) => {
  return (
    <StepIcon
      {...props}
      icon={''}
      sx={{
        color: active ? 'secondary.dark' : 'primary.main',
      }}
    />
  );
};

const CookingSkill = () => {
  const labels = [
    'I can barely boil water',
    'I can follow a recipe',
    'I can whip up a gourmet meal',
  ];
  const dispatch = useDispatch();
  const skillLevel = useSelector(skillLevelSelector);

  return (
    <Stack direction='column' justifyContent='center' alignItems='center'>
      <Typography
        variant='h5'
        align='center'
        sx={{ margin: '0 1rem 4.5rem 1rem' }}
      >
        How would you describe your cooking skill level?
      </Typography>
      <Stepper
        nonLinear
        activeStep={skillLevel}
        alternativeLabel
        sx={{ '.MuiStepConnector-line': { display: 'none' } }}
      >
        {labels.map((label, index) => {
          const StepIconWithProps = (props) => (
            <CustomStepIcon active={skillLevel === index} {...props} />
          );
          return (
            <Step key={index}>
              <StepLabel
                StepIconComponent={StepIconWithProps}
                onClick={() => dispatch(setSkillLevel(index))}
              >
                <Typography variant='body2' sx={{ fontSize: '12px' }}>
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Stack>
  );
};

export default CookingSkill;
