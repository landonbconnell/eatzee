import React, { useState } from 'react';
import { addAllergy, removeAllergy } from 'redux/reducers/userSlice';
import { Allergies as AllergyEnums } from '../../models/user/enums';
import { useDispatch, useSelector } from 'react-redux';
import { allergiesSelector } from 'redux/selectors/userSliceSelectors';
import CheckBoxStep from './CheckBoxStep';

const Allergies = () => {
  const dispatch = useDispatch();
  const selectedAllergies = useSelector(allergiesSelector);
  const [allergiesVisible, setAllergiesVisible] = useState(8);

  const handleAllergiesChange = (event) => {
    if (event.target.checked) {
      dispatch(addAllergy(event.target.name));
    } else {
      dispatch(removeAllergy(event.target.name));
    }
  };

  const allergies = Object.values(AllergyEnums);

  return (
    <CheckBoxStep
      headerText='Allergies'
      values={allergies}
      selectedValues={selectedAllergies}
      visible={allergiesVisible}
      setVisible={setAllergiesVisible}
      handleChange={handleAllergiesChange}
    />
  );
};

export default Allergies;
