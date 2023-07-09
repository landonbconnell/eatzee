import { Box } from '@mui/material';
import * as React from 'react';

const CarouselBoxStyles = {
  minWidth: '20rem',
  maxWidth: '30rem',
  minHeight: '22.5rem',
  maxHeight: '30rem',
  overflow: 'hidden', // hide both horizontal and vertical overflow
  borderTopLeftRadius: '2.5rem',
  borderBottomLeftRadius: '2.5rem',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  backgroundColor: 'primary.light',
};

const Carousel = () => {
  return <Box sx={CarouselBoxStyles}> </Box>;
};

export default Carousel;
