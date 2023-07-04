import React from "react";
import { Stack, Typography } from "@mui/material";

interface MealTabProps {
  meal: string;
}

const MealTab = ({ meal }: MealTabProps) => (
  <Typography variant="h6" sx={{ color: "primary.contrastText" }}>
    {meal}
  </Typography>
);

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
        <MealTab meal="Breakfast" />
        <MealTab meal="Lunch" />
        <MealTab meal="Dinner" />
      </Stack>
    </Stack>
  );
};

export default Header;
