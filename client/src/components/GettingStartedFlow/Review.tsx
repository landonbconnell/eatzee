import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { userSettingsSelector } from 'redux/selectors/userSliceSelectors';
import {
  removeAllergy,
  removeDietaryRestriction,
  removeCookingEquipment,
  setSkillLevel,
} from 'redux/reducers/userSlice';
import ReviewSection from './ReviewSection';
import Selector from 'components/misc/Selector';

const Review = () => {
  const dispatch = useDispatch();
  const userSettings = useSelector(userSettingsSelector);

  const skillLabels = [
    'I can barely boil water',
    'I can follow a recipe',
    'I can whip up a gourmet meal',
  ];

  const handleRemoveDietaryRestriction = (dietaryRestriction) => {
    dispatch(removeDietaryRestriction(dietaryRestriction));
  };

  const handleRemoveAllergy = (allergy) => {
    dispatch(removeAllergy(allergy));
  };

  const handleRemoveCookingEquipment = (cookingEquipment) => {
    dispatch(removeCookingEquipment(cookingEquipment));
  };

  const handleSkillLevelChange = (skillLevel) => {
    dispatch(setSkillLevel(skillLabels.indexOf(skillLevel)));
  };

  return (
    <Box sx={{ overflow: 'auto', maxHeight: '35rem', marginBottom: '1rem' }}>
      <Stack direction='column' justifyContent='center' alignItems='center'>
        <Typography
          variant='h5'
          align='center'
          sx={{ margin: '0 1rem 1rem 1rem' }}
          fontWeight='bold'
        >
          Review
        </Typography>

        <ReviewSection
          variable='Dietary Restrictions'
          values={userSettings.dietaryRestrictions}
          handleRemove={handleRemoveDietaryRestriction}
        />

        <ReviewSection
          variable='Allergies'
          values={userSettings.allergies}
          handleRemove={handleRemoveAllergy}
        />

        <Stack
          direction='column'
          justifyContent='center'
          alignItems='flex-start'
          sx={{ p: '0 1rem 1.5rem 1rem', width: '100%' }}
        >
          <Typography variant='h6' align='center' fontWeight='bold'>
            Cooking Skill
          </Typography>
          <Selector
            labels={skillLabels}
            value={skillLabels[userSettings.skillLevel]}
            handleChange={handleSkillLevelChange}
          />
        </Stack>

        <ReviewSection
          variable='Cooking Equipment'
          values={userSettings.cookingEquipment}
          handleRemove={handleRemoveCookingEquipment}
        />

        <Button
          sx={{
            backgroundColor: 'secondary.dark',
            color: 'primary.light',
            width: '10rem',
          }}
        >
          <Typography variant='body1'>Save</Typography>
        </Button>
      </Stack>
    </Box>
  );
};

export default Review;
