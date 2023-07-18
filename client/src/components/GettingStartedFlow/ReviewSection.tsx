import React from 'react';
import {
  Allergies,
  CookingEquipment,
  DietaryRestrictions,
} from 'models/user/enums';
import { Stack, Typography, IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';

interface ReviewSectionProps {
  variable: string;
  values: DietaryRestrictions[] | Allergies[] | CookingEquipment[];
  handleRemove: (value: string) => void;
}

const ReviewSection = ({
  variable,
  values,
  handleRemove,
}: ReviewSectionProps) => {
  return (
    <>
      <Typography
        variant='h6'
        align='center'
        fontWeight='bold'
        sx={{ m: '1rem 0 0 1rem' }}
      >
        {variable}
      </Typography>
      {values.map((value, index) => (
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          key={index}
          sx={{ width: '100%' }}
        >
          <Typography variant='body1' sx={{ ml: '1rem' }}>
            {value}
          </Typography>
          <IconButton
            onClick={() => handleRemove(value)}
            sx={{ p: '0.25rem', mr: '1rem' }}
          >
            <Close />
          </IconButton>
        </Stack>
      ))}
    </>
  );
};

export default ReviewSection;
