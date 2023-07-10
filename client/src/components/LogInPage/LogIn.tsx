import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAccessToken } from 'redux/reducers/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const LogInBoxStyles = {
  minWidth: '20rem',
  maxWidth: '30rem', // Increase width
  minHeight: '22.5rem',
  maxHeight: '30rem', // Increase height
  padding: '2rem', // Increase padding
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post('http://localhost:5000/api/users/login', {
        username,
        password,
      })
      .then((res) => {
        dispatch(setAccessToken(res.data.accessToken));
        navigate('/home');
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
          sx={{ fontWeight: 'bold', margin: '1rem 0 2.5rem 0' }}
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
            width: '12rem',
            marginTop: '2rem',
            backgroundColor: 'secondary.dark',
            color: 'primary.light',
          }}
        >
          Log In
        </Button>

        <Typography variant='body2' sx={{ marginTop: '2rem' }}>
          {"Don't have an account? "}
          <Link to='/register'>
            <Box component='span' sx={{ color: 'secondary.dark' }}>
              Sign Up
            </Box>
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default LogIn;
