import React, { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/system';
import LogInField from './LogInField';
import {
  setId,
  setUsername as setReduxUsername,
} from 'redux/reducers/userSlice';

const LogIn = () => {
  const theme = useTheme();

  // xs: 0px (0rem) and up
  // sm: 600px (37.5rem) and up
  // md: 960px (60rem) and up
  // lg: 1280px (80rem) and up
  // xl: 1920px (120rem) and up

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
    [theme.breakpoints.down('lg')]: {
      borderRadius: '2.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minWidth: '15rem',
      maxWidth: '30rem',
      padding: '1.5rem',
      borderRadius: '1.5rem',
    },
  };

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
          const data = res.data;
          dispatch(setId(data.id));
          dispatch(setReduxUsername(data.username));
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
          sx={{
            fontWeight: 'bold',
            marginBottom: '2rem',
            [theme.breakpoints.down('sm')]: {
              marginBottom: '1.5rem',
            },
          }}
        >
          Welcome to Eatzier!
        </Typography>

        <LogInField
          label='Username'
          type='text'
          value={username}
          setValue={setUsername}
          error={usernameError}
        />

        <LogInField
          label='Password'
          type='password'
          value={password}
          setValue={setPassword}
          error={passwordError}
        />

        <Typography variant='body2' sx={{ color: 'secondary.dark' }}>
          Forgot Username/Password?
        </Typography>
        <Button
          variant='contained'
          onClick={handleLogin}
          sx={{
            margin: '2rem 0 4rem 0',
            backgroundColor: 'secondary.dark',
            color: 'primary.light',
            width: '15rem',
            [theme.breakpoints.down('sm')]: {
              width: '12rem',
              margin: '1.5rem 0 1.5rem 0',
            },
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
