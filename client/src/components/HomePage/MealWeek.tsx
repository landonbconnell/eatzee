import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Stack, Typography } from '@mui/material';
import { daysSelector } from 'redux/selectors/daysSelector';

const MealWeek = () => {
    const days = useSelector(daysSelector);

    return ( 
        <Stack direction="column" alignItems="center" justifyContent="center">
            
        </Stack>    
    );
}
 
export default MealWeek;