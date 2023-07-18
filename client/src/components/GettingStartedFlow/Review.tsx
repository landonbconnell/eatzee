import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { userSettingsSelector } from 'redux/selectors/userSliceSelectors';
import {
  removeAllergy,
  removeDietaryRestriction,
  removeCookingEquipment,
} from 'redux/reducers/userSlice';
import ReviewSection from './ReviewSection';

const Review = () => {
  const dispatch = useDispatch();
  const userSettings = useSelector(userSettingsSelector);

  const handleRemoveDietaryRestriction = (dietaryRestriction) => {
    dispatch(removeDietaryRestriction(dietaryRestriction));
  };

  const handleRemoveAllergy = (allergy) => {
    dispatch(removeAllergy(allergy));
  };

  const handleRemoveCookingEquipment = (cookingEquipment) => {
    dispatch(removeCookingEquipment(cookingEquipment));
  };

  return (
    <Stack direction='column' justifyContent='center' alignItems='flex-start'>
      <Typography
        variant='h5'
        align='center'
        sx={{ margin: '0 1rem 0 1rem' }}
        fontWeight='bold'
      >
        Review
      </Typography>

      {userSettings.dietaryRestrictions.length > 0 && (
        <ReviewSection
          variable='Dietary Restrictions'
          values={userSettings.dietaryRestrictions}
          handleRemove={handleRemoveDietaryRestriction}
        />
      )}

      {userSettings.allergies.length > 0 && (
        <ReviewSection
          variable='Allergies'
          values={userSettings.allergies}
          handleRemove={handleRemoveAllergy}
        />
      )}

      <Typography
        variant='h6'
        align='center'
        fontWeight='bold'
        sx={{ m: '1rem 0 0 1rem' }}
      >
        Cooking Skill
      </Typography>
      <Typography variant='body1' align='center'>
        {userSettings.skillLevel}
      </Typography>

      {userSettings.cookingEquipment.length > 0 && (
        <ReviewSection
          variable='Cooking Equipment'
          values={userSettings.cookingEquipment}
          handleRemove={handleRemoveCookingEquipment}
        />
      )}
    </Stack>
  );
};

export default Review;
