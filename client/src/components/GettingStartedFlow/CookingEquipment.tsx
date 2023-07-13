import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCookingEquipment,
  removeCookingEquipment,
} from 'redux/reducers/userSlice';
import { Box, Stack, Grid, Typography } from '@mui/material';
import { CookingEquipment as Equipment } from 'models/user/enums';
import { cookingEquipmentSelector } from 'redux/selectors/userSliceSelectors';
import CheckBoxes from './CheckBoxes';

const CookingEquipment = () => {
  const equipment = Object.values(Equipment);
  const selectedCookingEquipment = useSelector(cookingEquipmentSelector);
  const dispatch = useDispatch();

  const handleCheck = (event) => {
    if (event.target.checked) {
      dispatch(addCookingEquipment(event.target.name));
    } else {
      dispatch(removeCookingEquipment(event.target.name));
    }
  };

  return (
    <Box sx={{ overflow: 'auto', maxHeight: '35rem', marginBottom: '1rem' }}>
      <Stack direction='column' justifyContent='center' alignItems='center'>
        <Typography
          variant='h5'
          align='center'
          sx={{ fontWeight: 'bold', margin: '0 1rem 0 1rem' }}
        >
          What cooking equipment do you have?
        </Typography>
        <Grid container sx={{ margin: '1rem 0 1rem 0' }}>
          {equipment.map((equipment, index) => (
            <CheckBoxes
              key={index}
              name={equipment}
              index={index}
              onChange={handleCheck}
              checked={selectedCookingEquipment.includes(equipment)}
            />
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default CookingEquipment;
