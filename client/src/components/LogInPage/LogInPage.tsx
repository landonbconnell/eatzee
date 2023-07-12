import * as React from 'react';
import { Hidden, Stack } from '@mui/material';
import Carousel from './Carousel';
import LogIn from './LogIn';
import CenterBox from 'components/misc/CenterBox';

const LogInPage = () => {
  return (
    <CenterBox>
      <Stack direction='row'>
        <Hidden lgDown>
          <Carousel />
        </Hidden>
        <LogIn />
      </Stack>
    </CenterBox>
  );
};

export default LogInPage;
