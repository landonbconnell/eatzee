import * as React from 'react';
import { Day } from 'redux/reducers/mealsSlice';

interface MealDayProps {
    day: Day;
}

const MealDay = ({ day } : MealDayProps) => {
    return ( 
        <p>{day.weekday}</p>
    );
}
 
export default MealDay;