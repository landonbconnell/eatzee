import React from "react";
import { Stack, Typography } from "@mui/material";
import MealTab from "./MealTab";
import { Meals } from "redux/reducers/mealsSlice";

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
        <MealTab meal={Meals.breakfast} />
        <MealTab meal={Meals.lunch} />
        <MealTab meal={Meals.dinner} />
      </Stack>
    </Stack>
  );
};

export default Header;
