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
    <Stack
      direction='column'
      alignItems='flex-start'
      justifyContent='center'
      sx={{ width: '100%', pb: '1rem' }}
    >
      <Typography
        variant='h6'
        align='center'
        fontWeight='bold'
        sx={{ ml: '1rem' }}
      >
        {variable}
      </Typography>

      {values.length > 0 ? (
        values.map((value, index) => (
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
        ))
      ) : (
        <Typography variant='body1' sx={{ ml: '1rem' }}>
          None
        </Typography>
      )}
    </Stack>
  );
};

export default ReviewSection;
