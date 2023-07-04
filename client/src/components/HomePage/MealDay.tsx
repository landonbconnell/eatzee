import * as React from 'react';
import { Day } from 'redux/reducers/mealsSlice';
import { Box } from '@mui/material';

interface MealDayProps {
    day: Day;
}

const MealDay = ({ day } : MealDayProps) => {
    return ( 
        <Box sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}></Box>
    );
}
 
export default MealDay;