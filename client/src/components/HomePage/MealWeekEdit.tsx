import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  useMediaQuery,
} from '@mui/material';
import WeekVariableStepper from './WeekVariableStepper';
import { Variables, Cuisines } from 'models/meals/enums';
import { useDispatch, useSelector } from 'react-redux';
import { addCuisine, removeCuisine } from 'redux/reducers/mealsSlice';
import { cuisinesSelector } from 'redux/selectors/mealsSelector';
import { useTheme } from '@mui/system';

const MealWeekEdit = () => {
  const [cuisinesVisible, setCuisinesVisible] = useState(12);
  const selectedCuisines = useSelector(cuisinesSelector);
  const dispatch = useDispatch();
  const isSmall = useMediaQuery('(max-width: 840px)');
  const theme = useTheme();

  const mealWeekEditBoxStyles = {
    width: '100%',
    maxWidth: '50rem',
    overflowY: 'auto',
    borderRadius: '2.5rem',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    padding: '2rem',
    backgroundColor: 'primary.light',
    marginLeft: '2rem',
    marginRight: '2rem',
    mt: 2,
    mb: 2,
    [theme.breakpoints.down(840)]: {
      minWidth: '20rem',
      maxWidth: '30rem',
      padding: '1rem',
      borderRadius: '1.5rem',
    },
  };

  const handleCheck = (event) => {
    if (event.target.checked) {
      dispatch(addCuisine(event.target.name));
    } else {
      dispatch(removeCuisine(event.target.name));
    }
  };

  const handleShowMore = () => {
    setCuisinesVisible((prevValue) => prevValue + 6);
  };

  const labels = [
    ["I'm hungry now", '', "I'm in no rush", '', 'I have all day'],
    ['$', '', '$$', '', '$$$'],
    [
      "I'm feeling indulgent",
      '',
      'I want balanced meals',
      '',
      'I want something nourishing',
    ],
  ];

  return (
    <Box sx={mealWeekEditBoxStyles}>
      <Grid container direction='row' spacing={5}>
        <Grid
          item
          container
          xs={isSmall ? 12 : 6}
          direction='column'
          justifyContent='space-evenly'
          alignItems='center'
          paddingLeft='2rem'
          paddingRight='2rem'
        >
          <WeekVariableStepper variable={Variables.time} labels={labels[0]} />
          <WeekVariableStepper variable={Variables.budget} labels={labels[1]} />
          <WeekVariableStepper
            variable={Variables.food_mood}
            labels={labels[2]}
          />
        </Grid>

        <Grid item xs={isSmall ? 12 : 6}>
          <Grid
            item
            container
            direction='row'
            justifyContent='center'
            alignItems='flex-start'
            spacing={2}
          >
            {Object.values(Cuisines)
              .slice(0, cuisinesVisible)
              .map((cuisine, index) => (
                <Grid item xs={6} key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleCheck}
                        name={cuisine}
                        checked={selectedCuisines.includes(cuisine)}
                        sx={{
                          '&.Mui-checked': {
                            color: 'secondary.dark',
                          },
                        }}
                      />
                    }
                    label={cuisine}
                  />
                </Grid>
              ))}
          </Grid>
          <Button onClick={handleShowMore} variant='contained' color='primary'>
            Show more
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MealWeekEdit;
