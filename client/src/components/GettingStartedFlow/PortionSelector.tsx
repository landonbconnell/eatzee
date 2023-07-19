import React from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { portionSizeSelector } from 'redux/selectors/userSliceSelectors';
import { setPortionSize } from 'redux/reducers/userSlice';

const PortionSelector = () => {
  const dispatch = useDispatch();
  const portionSize = useSelector(portionSizeSelector);
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <FormControl sx={{ width: '15rem' }}>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={portionSize}
        onChange={(event) => dispatch(setPortionSize(event.target.value))}
      >
        {labels.map((number) => (
          <MenuItem key={number} value={number}>
            {number}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PortionSelector;
