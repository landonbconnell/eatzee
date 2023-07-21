import React from 'react';
import MealWeekView from './MealWeekView';
import MealWeekEdit from './MealWeekEdit';
import { useSelector } from 'react-redux';
import { editModeSelector } from 'redux/selectors/mealsSelector';
import CenterBox from 'components/misc/CenterBox';

const HomePage = () => {
  const isEditMode = useSelector(editModeSelector);

  return (
    <CenterBox>{isEditMode ? <MealWeekEdit /> : <MealWeekView />}</CenterBox>
  );
};

export default HomePage;
