import React from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const KrogerButton = () => {
  const handleClick = async () => {
    const { data } = await axios.get(
      `${REACT_APP_API_URL}/api/kroger/auth/requestAuthCode`
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
