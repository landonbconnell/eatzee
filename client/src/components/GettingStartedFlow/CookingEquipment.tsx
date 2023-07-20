import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCookingEquipment,
  removeCookingEquipment,
} from 'redux/reducers/userSlice';
import { CookingEquipment as Equipment } from 'models/user/enums';
import { cookingEquipmentSelector } from 'redux/selectors/userSliceSelectors';
import CheckBoxStep from './CheckBoxStep';

const CookingEquipment = () => {
  const selectedCookingEquipment = useSelector(cookingEquipmentSelector);
  const dispatch = useDispatch();
  const [equipmentVisible, setEquipmentVisible] = useState(8);

  const handleCheck = (event) => {
    if (event.target.checked) {
      dispatch(addCookingEquipment(event.target.name));
    } else {
      dispatch(removeCookingEquipment(event.target.name));
    }
  };

  const equipment = Object.values(Equipment);

  return (
    <CheckBoxStep
      headerText='What cooking equipment do you have?'
      values={equipment}
      selectedValues={selectedCookingEquipment}
      visible={equipmentVisible}
      setVisible={setEquipmentVisible}
      handleChange={handleCheck}
    />
  );
};

export default CookingEquipment;
