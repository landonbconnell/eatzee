import React from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Variables, Cuisines } from 'models/meals/enums';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCuisine,
  removeCuisine,
  setPortionSize,
  updateWeekVariable,
} from 'redux/reducers/mealsSlice';
import {
  cuisinesSelector,
  currentMealSelector,
} from 'redux/selectors/mealsSelector';
import { daysSelector } from 'redux/selectors/daysSelector';
import { useTheme } from '@mui/system';
import DiscreteSlider from 'components/misc/DiscreteSlider';
import StyledButton from 'components/misc/StyledButton';
import Header from './Header';
import {
  idSelector,
  portionSizeSelector,
} from 'redux/selectors/userSliceSelectors';
import NumberSelector from 'components/misc/NumberSelector';
import { generateMealPlan, generateMealPlanParams } from 'api/user';

const MealWeekEdit = () => {
  const id = useSelector(idSelector);
  const selectedCuisines = useSelector(cuisinesSelector);
  const currentMeal = useSelector(currentMealSelector);
  const portions = useSelector(portionSizeSelector);
  const days = useSelector(daysSelector);
  const dispatch = useDispatch();
  const isSmall = useMediaQuery('(max-width: 840px)');
  const theme = useTheme();
  const labels = {
    time: ['Quick', '', '', '', 'Leisurely'],
    budget: ['$', '', '$$', '', '$$$'],
    food_mood: ['Indulgent', '', '', '', 'Nourishing'],
    portions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

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
      minWidth: '16rem',
      maxWidth: '30rem',
      padding: '1rem',
      borderRadius: '1.5rem',
    },
  };

  const handleGenerateMealPlans = async () => {
    const data: generateMealPlanParams = {
      id: id,
      data: {
        currentMeal,
        weekdays: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        time: days[0].time,
        budget: days[0].budget,
        foodMood: days[0].food_mood,
        portions: days[0].portion_size,
        cuisines: days[0].cuisines,
      },
    };

    try {
      const mealPlan = await generateMealPlan(data);
      console.log(mealPlan);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheck = (event) => {
    if (event.target.checked) {
      dispatch(addCuisine(event.target.name));
    } else {
      dispatch(removeCuisine(event.target.name));
    }
  };

  return (
    <Box sx={mealWeekEditBoxStyles}>
      <Header />
      <Grid
        container
        spacing={4}
        direction={isSmall ? 'column' : 'row'} // dynamically set the direction
      >
        <Grid
          item
          container
          xs={12}
          sm={6} // make the Grid item take up half the space on screens larger than 'sm'
          direction='column'
          justifyContent='space-evenly'
          alignItems='center'
        >
          <NumberSelector
            header='Portions'
            width='15rem'
            labels={labels.portions}
            value={portions}
            handleChange={(newPortionSize) =>
              dispatch(setPortionSize(newPortionSize))
            }
          />

          <DiscreteSlider
            header='Time'
            value={days[0].time}
            labels={labels.time}
            onChange={(event, newValue) => {
              dispatch(
                updateWeekVariable({
                  variable: Variables.time,
                  value: newValue,
                })
              );
            }}
          />

          <DiscreteSlider
            header='Budget'
            value={days[0].budget}
            labels={labels.budget}
            onChange={(event, newValue) => {
              dispatch(
                updateWeekVariable({
                  variable: Variables.budget,
                  value: newValue,
                })
              );
            }}
          />

          <DiscreteSlider
            header='Food Mood'
            value={days[0].food_mood}
            labels={labels.food_mood}
            onChange={(event, newValue) => {
              dispatch(
                updateWeekVariable({
                  variable: Variables.food_mood,
                  value: newValue,
                })
              );
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography
            variant='h6'
            align='center'
            sx={{ fontWeight: 'bold', marginBottom: '1rem' }}
          >
            World Cuisines
          </Typography>
          <Box
            sx={{
              maxHeight: '24rem', // adjust to control the maximum height of the scrollable area
              overflowY: 'auto', // makes the Box scrollable
              width: '100%',
              marginBottom: '1rem',
            }}
          >
            <Grid
              item
              container
              direction='row'
              justifyContent='center'
              alignItems='flex-start'
            >
              {Object.values(Cuisines).map((cuisine, index) => (
                <Grid item xs={12} sm={6} key={index}>
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
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
        }}
      >
        <StyledButton
          label='Generate Meal Plan'
          width='12rem'
          onClick={() => handleGenerateMealPlans()}
        />
      </Box>
    </Box>
  );
};

export default MealWeekEdit;
