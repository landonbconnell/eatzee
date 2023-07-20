import React, { useState } from 'react';
import {
  addDietaryRestriction,
  removeDietaryRestriction,
} from 'redux/reducers/userSlice';
import { DietaryRestrictions } from '../../models/user/enums';
import { useDispatch, useSelector } from 'react-redux';
import { dietaryRestrictionsSelector } from 'redux/selectors/userSliceSelectors';
import CheckBoxStep from './CheckBoxStep';

const Diet = () => {
  const dispatch = useDispatch();
  const selectedDietaryRestrictions = useSelector(dietaryRestrictionsSelector);
  const [dietaryVisible, setDietaryVisible] = useState(8);

  const handleDietaryChange = (event) => {
    if (event.target.checked) {
      dispatch(addDietaryRestriction(event.target.name));
    } else {
      dispatch(removeDietaryRestriction(event.target.name));
    }
  };

  const dietaryRestrictions = Object.values(DietaryRestrictions);

  return (
    <CheckBoxStep
      headerText='Do you have any dietary restrictions?'
      values={dietaryRestrictions}
      selectedValues={selectedDietaryRestrictions}
      visible={dietaryVisible}
      setVisible={setDietaryVisible}
      handleChange={handleDietaryChange}
    />
  );
};

export default Diet;
