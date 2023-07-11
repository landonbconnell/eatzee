import * as React from 'react';
import { Stack, TextField, Typography } from '@mui/material';

interface SignUpFieldProps {
  label: string;
  value: string;
  type?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  errors: string[];
}

const SignUpField = ({
  label,
  value,
  type,
  setValue,
  errors,
}: SignUpFieldProps) => {
  return (
    <Stack direction='column' justifyContent='center' alignItems='center'>
      <TextField
        label={label}
        type={type}
        value={value}
        variant='outlined'
        error={errors.length > 0}
        onChange={(e) => setValue(e.target.value)}
        sx={{ minWidth: '15rem', maxWidth: '20rem' }}
      />
      <Stack
        direction='column'
        justifyContent='flex-start'
        alignItems='flex-start'
        sx={{
          margin: '0.5rem 0 2rem 1rem',
          minWidth: '15rem',
          maxWidth: '20rem',
        }}
      >
        {errors.map((error, index) => (
          <Typography key={index} variant='caption' color='error.main'>
            • {error}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default SignUpField;
