import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

const LocationButton = () => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const showPosition = (position) => {
    alert(
      'Latitude: ' +
        position.coords.latitude +
        '\nLongitude: ' +
        position.coords.longitude
    );
  };

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        alert('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        alert('The request to get user location timed out.');
        break;
      case error.UNKNOWN_ERROR:
        alert('An unknown error occurred.');
        break;
      default:
        alert('An unknown error occurred.');
    }
  };

  return (
    <Box>
      <Button variant='contained' color='primary' onClick={getLocation}>
        Get Location
      </Button>
    </Box>
  );
};

export default LocationButton;
