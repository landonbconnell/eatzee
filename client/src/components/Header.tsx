import React from "react";
import { Stack } from "@mui/material";

const Header = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <h1>Eatzier</h1>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={5}
      >
        <h3>Breakfast</h3>
        <h3>Lunch</h3>
        <h3>Dinner</h3>
      </Stack>
    </Stack>
  );
};

export default Header;
