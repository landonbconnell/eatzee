import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAccessToken } from 'redux/reducers/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const LogInBoxStyles = {
  minWidth: '20rem',
  maxWidth: '30rem',
  minHeight: '22.5rem',
  maxHeight: '40rem',
  padding: '5rem 5rem 2rem 5rem',
  overflow: 'hidden',
  borderTopRightRadius: '2.5rem',
  borderBottomRightRadius: '2.5rem',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  backgroundColor: 'primary.light',
};

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    setUsernameError('');
    setPasswordError('');

    if (username && password) {
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
          console.log(err);
          if (err.response.status === 401) {
            // Username or Password is incorrect
            setPassword('');
            setPasswordError(err.response.data.errors[0].msg);
          } else if (err.response.status === 500) {
            // Internal Server Error
            console.log('Internal Server Error');
          }
        });
    } else {
      if (username === '') setUsernameError('Username is required');
      if (password === '') setPasswordError('Password is required');
    }
  };

  return (
    <Box sx={LogInBoxStyles}>
      <Stack direction='column' justifyContent='center' alignItems='center'>
        <Typography
          variant='h5'
          sx={{ fontWeight: 'bold', marginBottom: '2rem' }}
        >
          Welcome to Eatzier!
        </Typography>
        <TextField
          label='Username'
          value={username}
          type='text'
          variant='outlined'
          helperText={usernameError}
          error={usernameError ? true : false}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ width: '20rem', height: '6rem' }}
        />
        <TextField
          label='Password'
          value={password}
          type='password'
          variant='outlined'
          helperText={passwordError}
          error={passwordError ? true : false}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ width: '20rem', height: '6rem' }}
        />

        <Typography variant='body2' sx={{ color: 'secondary.dark' }}>
          Forgot Username/Password?
        </Typography>
        <Button
          variant='contained'
          onClick={handleLogin}
          sx={{
            width: '15rem',
            margin: '2rem 0 4rem 0',
            backgroundColor: 'secondary.dark',
            color: 'primary.light',
          }}
        >
          Log In
        </Button>

        <Typography variant='body2' sx={{ marginTop: '2rem' }}>
          {"Don't have an account? "}
          <Link to='/signup'>
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
