import React from 'react';
import { Button } from '@mui/material';
import StyledButton from 'components/misc/StyledButton';

const SeeMoreButton = ({ visible, setVisible, revealNum }) => {
  const onClick = () => setVisible(visible + revealNum);

  return <StyledButton label='See More' width='10rem' onClick={onClick} />;
};

export default SeeMoreButton;
