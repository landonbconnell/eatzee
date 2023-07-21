import React from 'react';
import { Typography, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSkillLevel } from 'redux/reducers/userSlice';
import { skillLevelSelector } from 'redux/selectors/userSliceSelectors';
import RadioButtons from 'components/misc/RadioButtons';

const CookingSkill = () => {
  const labels = [
    'I can barely boil water',
    'I can follow a recipe',
    'I can whip up a gourmet meal',
  ];
  const dispatch = useDispatch();
  const skillLevel = useSelector(skillLevelSelector);

  const handleChange = (event) => {
    dispatch(setSkillLevel(event.target.value));
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent='space-around'
      alignItems='center'
    >
      <Grid item>
        <Typography
          variant='h5'
          align='center'
          sx={{ fontWeight: 'bold', margin: '0 1rem 2.75rem 1rem' }}
        >
          How would you describe your cooking skill level?
        </Typography>
      </Grid>

      <Grid item>
        <RadioButtons
          labels={labels}
          value={skillLevel}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default CookingSkill;
