import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {
  DietaryRestrictions,
  Allergies,
  setDietaryRestrictions,
  setAllergies,
} from 'redux/reducers/userSlice';
import { useDispatch } from 'react-redux';
import CheckBoxes from './CheckBoxes';
import SeeMoreButton from './SeeMoreButton';

const DietAndAllergies = () => {
  const dispatch = useDispatch();
  const [dietaryVisible, setDietaryVisible] = useState(6);
  const [allergiesVisible, setAllergiesVisible] = useState(6);

  const handleDietaryChange = (event) => {
    dispatch(setDietaryRestrictions(event.target.name));
  };

  const handleAllergiesChange = (event) => {
    dispatch(setAllergies(event.target.name));
  };

  const dietaryRestrictions = Object.values(DietaryRestrictions);
  const allergies = Object.values(Allergies);

  return (
    <Box sx={{ overflow: 'auto', maxHeight: '36rem' }}>
      <Box sx={{ marginBottom: '2rem' }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
          Dietary Restrictions
        </Typography>
        <Grid container>
          {dietaryRestrictions
            .slice(0, dietaryVisible)
            .map((restriction, index) => (
              <CheckBoxes
                name={restriction}
                index={index}
                onChange={handleDietaryChange}
              />
            ))}
        </Grid>
        {dietaryVisible < dietaryRestrictions.length && (
          <SeeMoreButton
            visible={dietaryVisible}
            setVisible={setDietaryVisible}
          />
        )}
      </Box>

      <Box sx={{ marginBottom: '2rem' }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
          Allergies
        </Typography>
        <Grid container>
          {allergies.slice(0, allergiesVisible).map((allergy, index) => (
            <CheckBoxes
              name={allergy}
              index={index}
              onChange={handleAllergiesChange}
            />
          ))}
        </Grid>
        {allergiesVisible < allergies.length && (
          <SeeMoreButton
            visible={allergiesVisible}
            setVisible={setAllergiesVisible}
          />
        )}
      </Box>
    </Box>
  );
};

export default DietAndAllergies;
