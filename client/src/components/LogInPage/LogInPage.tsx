import * as React from 'react';
import { Hidden, Stack } from '@mui/material';
import Carousel from './Carousel';
import LogIn from './LogIn';
import CenterBox from 'components/misc/CenterBox';

const LogInPage = () => {
  return (
    <CenterBox>
      <LogIn />
    </CenterBox>
  );
};

export default LogInPage;
