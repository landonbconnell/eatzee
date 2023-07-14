import React from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

const KrogerButton = () => {
  const handleClick = async () => {
    const { data } = await axios.get(
      'http://localhost:5000/api/kroger/auth/requestAuthCode'
    );
    window.location.href = data.authUrl;
  };
  return (
    <Button variant='contained' color='primary' onClick={handleClick}>
      Log In With Kroger
    </Button>
  );
};

export default KrogerButton;
