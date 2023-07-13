import React from 'react';
import { Stepper, Step, StepLabel, Stack, Typography } from '@mui/material';
import { updateVariable } from 'redux/reducers/mealsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { daysSelector } from 'redux/selectors/daysSelector';
import { variableToPropString, variableToString } from 'utils/variableToString';
import { Weekdays, Variables } from 'models/meals/enums';
import CustomStepIcon from 'components/misc/CustomStepIcon';

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
      <Typography sx={{ padding: '1rem 0 1rem 0' }}>
        {variableToString(variable)}
      </Typography>
      <Stepper
        nonLinear
        activeStep={activeStep}
        alternativeLabel
        sx={{ '.MuiStepConnector-line': { display: 'none' } }}
      >
        {labels.map((label, index) => {
          const StepIconWithProps = (props) => (
            <CustomStepIcon active={activeStep === index} {...props} />
          );
          return (
            <Step key={index}>
              <StepLabel
                StepIconComponent={StepIconWithProps}
                onClick={() =>
                  dispatch(updateVariable({ weekday, variable, value: index }))
                }
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

export default VariableStepper;
