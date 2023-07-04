import React from "react";
import { Stack, Typography } from "@mui/material";
import { changeMeal } from "redux/reducers/mealsSlice";
import { Meals } from "redux/reducers/mealsSlice";
import { mealToString } from "utils/mealToString";
import { useDispatch, useSelector } from "react-redux";
import { currentMealSelector } from "redux/selectors/currentMealSelector";

interface MealTabProps {
  meal: Meals;
}

const MealTab = ({ meal }: MealTabProps) => {
  const dispatch = useDispatch();
  const currentMeal = useSelector(currentMealSelector);

  return (
    <Typography
      variant="h6"
      onClick={() => dispatch(changeMeal(meal))}
      sx={{
        color: "primary.contrastText",
        cursor: "pointer", // Changes the cursor to a hand on hover
        textDecoration: meal === currentMeal ? "underline" : "none", // Underline if this meal is the selected one
        "&:hover": {
          color: "secondary.main", // Changes the text color on hover
        },
      }}
    >
      {mealToString(meal)}
    </Typography>
  );
};

const Header = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Typography variant="h4" sx={{ color: "primary.contrastText" }}>
        Eatzier
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={5}
      >
        <MealTab meal={Meals.Breakfast} />
        <MealTab meal={Meals.Lunch} />
        <MealTab meal={Meals.Dinner} />
      </Stack>
    </Stack>
  );
};

export default Header;
