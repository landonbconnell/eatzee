import React from 'react';
import { Stepper, Step, StepLabel, Stack } from '@mui/material';
import { Variables, Weekdays, updateVariable } from 'redux/reducers/mealsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { daysSelector } from 'redux/selectors/daysSelector';
import { variableToPropString } from 'utils/variableToString';

interface VariableStepperProps {
  weekday: Weekdays;
  variable: Variables;
  labels: string[];
}

const VariableStepper = ({
  weekday,
  variable,
  labels,
}: VariableStepperProps) => {
  const dispatch = useDispatch();
  const days = useSelector(daysSelector);
  const activeStep = days[weekday][variableToPropString(variable)];

  return (
    <Stack direction='column' justifyContent='center' alignItems='center'>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {labels.map((label, index) => (
          <Step key={label}>
            <StepLabel
              icon=''
              onClick={() =>
                dispatch(updateVariable({ weekday, variable, value: index }))
              }
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default VariableStepper;
