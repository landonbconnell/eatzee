import * as React from 'react';
import { TextField } from '@mui/material';
import { useTheme } from '@mui/system';

interface LogInFieldProps {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  error: string;
}

const LogInField = ({
  label,
  type,
  value,
  setValue,
  error,
}: LogInFieldProps) => {
  const theme = useTheme();

  const LogInFieldStyles = {
    height: '6rem',
    width: '20rem',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '14rem',
    },
  };

  return (
    <TextField
      label={label}
      value={value}
      type={type}
      variant='outlined'
      helperText={error}
      error={error ? true : false}
      onChange={(e) => setValue(e.target.value)}
      sx={LogInFieldStyles}
    />
  );
};

export default LogInField;
