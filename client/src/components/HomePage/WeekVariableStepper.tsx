import React from 'react';
import { Stepper, Step, StepLabel, Stack, Typography } from '@mui/material';
import { updateWeekVariable } from 'redux/reducers/mealsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { daysSelector } from 'redux/selectors/daysSelector';
import { variableToPropString, variableToString } from 'utils/variableToString';
import { Variables } from 'models/meals/enums';
import CustomStepIcon from 'components/misc/CustomStepIcon';

interface WeekVariableStepperProps {
  variable: Variables;
  labels: string[];
}

const WeekVariableStepper = ({
  variable,
  labels,
}: WeekVariableStepperProps) => {
  const dispatch = useDispatch();
  const days = useSelector(daysSelector);
  const activeStep = days[0][variableToPropString(variable)];

  return (
    // This is the container for the stepper
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{
        marginBottom: '2.5rem',
      }}
    >
      {/* This is the variable name, e.g. "time" */}
      <Typography sx={{ paddingBottom: '1rem' }}>
        {variableToString(variable)}
      </Typography>

      {/* This is the stepper itself */}
      <Stepper
        nonLinear
        activeStep={activeStep}
        alternativeLabel
        sx={{
          '.MuiStepConnector-line': { display: 'none' },

          width: '20rem',
        }}
      >
        {/* These are the stepper steps */}
        {labels.map((label, index) => {
          const StepIconWithProps = (props) => (
            <CustomStepIcon active={activeStep === index} {...props} />
          );
          return (
            <Step key={index}>
              <StepLabel
                StepIconComponent={StepIconWithProps}
                onClick={() =>
                  dispatch(updateWeekVariable({ variable, value: index }))
                }
              >
                {/* This is the label for the step */}
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

export default WeekVariableStepper;
