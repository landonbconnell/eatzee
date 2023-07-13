import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {
  DietaryRestrictions,
  Allergies,
  addDietaryRestriction,
  addAllergy,
  removeDietaryRestriction,
  removeAllergy,
} from 'redux/reducers/userSlice';
import { useDispatch } from 'react-redux';
import CheckBoxes from './CheckBoxes';
import SeeMoreButton from './SeeMoreButton';

const DietAndAllergies = () => {
  const dispatch = useDispatch();
  const [dietaryVisible, setDietaryVisible] = useState(6);
  const [allergiesVisible, setAllergiesVisible] = useState(6);

  const handleDietaryChange = (event) => {
    if (event.target.checked) {
      dispatch(addDietaryRestriction(event.target.name));
    } else {
      dispatch(removeDietaryRestriction(event.target.name));
    }
  };

  const handleAllergiesChange = (event) => {
    if (event.target.checked) {
      dispatch(addAllergy(event.target.name));
    } else {
      dispatch(removeAllergy(event.target.name));
    }
  };

  const dietaryRestrictions = Object.values(DietaryRestrictions);
  const allergies = Object.values(Allergies);

  return (
    <Box sx={{ overflow: 'auto', maxHeight: '36rem' }}>
      <Box sx={{ marginBottom: '2rem' }}>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 'bold',
            marginBottom: '0.50rem',
          }}
        >
          Dietary Restrictions
        </Typography>
        <Grid container sx={{ marginBottom: '0.5rem' }}>
          {dietaryRestrictions
            .slice(0, dietaryVisible)
            .map((restriction, index) => (
              <CheckBoxes
                key={index}
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
        <Typography
          variant='h6'
          sx={{ fontWeight: 'bold', marginBottom: '0.50rem' }}
        >
          Allergies
        </Typography>
        <Grid container sx={{ marginBottom: '0.5rem' }}>
          {allergies.slice(0, allergiesVisible).map((allergy, index) => (
            <CheckBoxes
              key={index}
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
