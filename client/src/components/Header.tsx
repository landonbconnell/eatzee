import React from "react";
import { Stack, Typography } from "@mui/material";

const Header = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Typography variant="h4">Eatzier</Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={5}
      >
        <Typography variant="h6">Breakfast</Typography>
        <Typography variant="h6">Lunch</Typography>
        <Typography variant="h6">Dinner</Typography>
      </Stack>
    </Stack>
  );
};

export default Header;
