import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { userSettingsSelector } from 'redux/selectors/userSliceSelectors';
import {
  removeAllergy,
  removeDietaryRestriction,
  removeCookingEquipment,
  setSkillLevel,
} from 'redux/reducers/userSlice';
import ReviewSection from './ReviewSection';
import StringSelector from 'components/misc/StringSelector';
import ScrollableBox from 'components/misc/ScrollableBox';

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
          sx={{ ml: '1rem', mr: '1rem' }}
          fontWeight='bold'
        >
          Review
        </Typography>
        <ScrollableBox maxHeight='22rem'>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='flex-start'
            sx={{ p: '0 1rem 1.5rem 1rem', width: '100%' }}
          >
            <Typography variant='h6' align='center' fontWeight='bold'>
              Cooking Skill
            </Typography>
            <StringSelector
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
        </ScrollableBox>
      </Stack>
    </Box>
  );
};

export default Review;
