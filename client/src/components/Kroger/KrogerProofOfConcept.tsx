import { Stack } from '@mui/material';
import React from 'react';
import KrogerButton from './KrogerButton';
import LocationButton from './GeoLocationPermissions';

const KrogerProofOfConcept = () => {
  return (
    <Stack direction='column'>
      <KrogerButton />
      <LocationButton />
    </Stack>
  );
};

export default KrogerProofOfConcept;
