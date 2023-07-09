import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';

const LogInBoxStyles = {
  minWidth: '20rem',
  maxWidth: '20rem',
  minHeight: '22.5rem',
  maxHeight: '22.5rem',
  padding: '1rem',
  overflow: 'hidden', // hide both horizontal and vertical overflow
  borderTopRightRadius: '2.5rem',
  borderBottomRightRadius: '2.5rem',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  backgroundColor: 'primary.light',
};

const LogIn = () => {
  return (
    <Box sx={LogInBoxStyles}>
      <Stack direction='column' justifyContent='center' alignItems='center'>
        <Typography
          variant='h5'
          sx={{ fontWeight: 'bold', margin: '1rem 0 1.5rem 0' }}
        >
          Welcome to Eatzier!
        </Typography>
        <TextField
          label='Username'
          variant='outlined'
          sx={{ width: '15rem', marginBottom: '1rem' }}
        />
        <TextField
          label='Password'
          variant='outlined'
          sx={{ width: '15rem' }}
        />
        <Typography
          variant='body2'
          sx={{ margin: '1rem 0 1rem 0', color: 'secondary.dark' }}
        >
          Forgot Username/Password?
        </Typography>
        <Button
          variant='contained'
          sx={{
            width: '15rem',
            marginTop: '1rem',
            backgroundColor: 'secondary.dark',
            color: 'primary.light',
          }}
        >
          Log In
        </Button>

        <Stack direction='row'>
          <Typography variant='body2' sx={{ marginTop: '1rem' }}>
            {"Don't have an account? "}
          </Typography>
          <Typography
            variant='body2'
            sx={{ marginTop: '1rem', color: 'secondary.dark' }}
          >
            {' Sign Up'}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LogIn;
