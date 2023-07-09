import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';

const LogInBoxStyles = {
  minWidth: '20rem',
  maxWidth: '20rem',
  minHeight: '22.5rem',
  maxHeight: '22.5rem',
  padding: '1rem',
  overflow: 'hidden',
  borderTopRightRadius: '2.5rem',
  borderBottomRightRadius: '2.5rem',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  backgroundColor: 'primary.light',
};

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    axios
      .post('http://localhost:5000/api/users/login', {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          // User not found
          setUsernameError(err.response.data.errors[0].msg);
          setUsername('');
          setPasswordError('');
        } else if (err.response.status === 401) {
          // Password is incorrect
          setUsernameError('');
          setPasswordError(err.response.data.errors[0].msg);
          setPassword('');
        } else if (err.response.status === 500) {
          // Internal Server Error
          console.log('Internal Server Error');
        }
      });
  };

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
          value={username}
          variant='outlined'
          helperText={usernameError}
          error={usernameError ? true : false}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ width: '15rem', marginBottom: '1rem' }}
        />
        <TextField
          label='Password'
          value={password}
          type='password'
          variant='outlined'
          helperText={passwordError}
          error={passwordError ? true : false}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ width: '15rem', marginBottom: '1rem' }}
        />
        <Typography
          variant='body2'
          sx={{ marginBottom: '1rem', color: 'secondary.dark' }}
        >
          Forgot Username/Password?
        </Typography>
        <Button
          variant='contained'
          onClick={handleLogin}
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
