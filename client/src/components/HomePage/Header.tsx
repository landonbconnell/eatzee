import React, { useState } from 'react';
import {
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MealTab from './MealTab';
import { Meals } from 'models/meals/enums';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <List>
      <ListItem>
        <MealTab meal={Meals.breakfast} />
      </ListItem>
      <ListItem>
        <MealTab meal={Meals.lunch} />
      </ListItem>
      <ListItem>
        <MealTab meal={Meals.dinner} />
      </ListItem>
    </List>
  );

  return (
    <Stack
      direction={isMobile ? 'row' : 'column'}
      justifyContent={isMobile ? 'space-around' : 'center'}
      alignItems='center'
      sx={{ margin: '2.5rem 0 2.5rem 0' }}
    >
      <Typography variant='h4' sx={{ color: 'primary.contrastText' }}>
        Eatzier
      </Typography>
      {isMobile ? (
        <>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor='right' open={drawerOpen} onClose={handleDrawerToggle}>
            {drawer}
          </Drawer>
        </>
      ) : (
        <Stack
          direction='row'
          justifyContent='space-evenly'
          alignItems='center'
          spacing={5}
          sx={{ mt: '1rem' }}
        >
          <MealTab meal={Meals.breakfast} />
          <MealTab meal={Meals.lunch} />
          <MealTab meal={Meals.dinner} />
        </Stack>
      )}
    </Stack>
  );
};

export default Header;
