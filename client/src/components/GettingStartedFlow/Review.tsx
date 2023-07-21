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
import Selector from 'components/misc/Selector';
import StyledButton from 'components/misc/StyledButton';
import { updateUserData } from 'api/user';
import { useNavigate } from 'react-router-dom';

const Review = () => {
  const navigate = useNavigate();
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

  const handleSave = () => {
    const data = {
      id: userSettings.id,
      data: {
        dietaryRestrictions: userSettings.dietaryRestrictions,
        allergies: userSettings.allergies,
        skillLevel: userSettings.skillLevel,
        cookingEquipment: userSettings.cookingEquipment,
      },
    };

    updateUserData(data)
      .then(() => navigate('/home'))
      .catch((err) => console.log(err));
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

        <StyledButton label='save' width='10rem' onClick={handleSave} />
      </Stack>
    </Box>
  );
};

export default Review;
