import React, { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignUpField from './SignUpField';
import { useTheme } from '@mui/system';
import { useDispatch } from 'react-redux';
import {
  setId,
  setUsername as setReduxUsername,
} from 'redux/reducers/userSlice';

const SignUp = () => {
  const theme = useTheme();

  const SignInBoxStyles = {
    minWidth: '20rem',
    maxWidth: '30rem',
    minHeight: '22.5rem',
    maxHeight: '40rem',
    padding: '4rem 5rem 2rem 5rem',
    overflow: 'hidden',
    borderRadius: '2.5rem',
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
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailErrors, setEmailErrors] = useState<string[]>([]);
  const [usernameErrors, setUsernameErrors] = useState<string[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [confirmErrors, setConfirmErrors] = useState<string[]>([]);

  const handleLogin = () => {
    setEmailErrors([]);
    setUsernameErrors([]);
    setPasswordErrors([]);

    if (email && username && password && confirmPassword) {
      if (password !== confirmPassword) {
        setConfirmPassword('');
        setConfirmErrors(['Passwords do not match']);
      } else {
        axios
          .post('http://localhost:5000/api/users/register', {
            email,
            username,
            password,
          })
          .then((res) => {
            const data = res.data;
            dispatch(setId(data._id));
            dispatch(setReduxUsername(data.username));
            navigate('/getting-started');
          })
          .catch((err) => {
            const errors = err.response.data.errors;

            errors.forEach((error) => {
              if (error.path === 'email') {
                setEmailErrors((previousState) => [
                  ...previousState,
                  error.msg,
                ]);
              } else if (error.path === 'username') {
                setUsernameErrors((previousState) => [
                  ...previousState,
                  error.msg,
                ]);
              } else {
                setPasswordErrors((previousState) => [
                  ...previousState,
                  error.msg,
                ]);
              }
            });
          });
      }
    }
    if (email === '') setEmailErrors(['Email is required']);
    if (username === '') setUsernameErrors(['Username is required']);
    if (password === '') setPasswordErrors(['Password is required']);
    if (confirmPassword === '')
      setConfirmErrors(['Confirm password is required']);
  };

  return (
    <Box sx={SignInBoxStyles}>
      <Stack direction='column' justifyContent='center' alignItems='center'>
        <Typography
          variant='h5'
          sx={{ fontWeight: 'bold', marginBottom: '2rem' }}
        >
          Sign Up
        </Typography>

        <SignUpField
          label='Email'
          value={email}
          setValue={setEmail}
          errors={emailErrors}
        />

        <SignUpField
          label='Username'
          value={username}
          setValue={setUsername}
          errors={usernameErrors}
        />

        <SignUpField
          label='Password'
          type='password'
          value={password}
          setValue={setPassword}
          errors={passwordErrors}
        />

        <SignUpField
          label='Confirm Password'
          type='password'
          value={confirmPassword}
          setValue={setConfirmPassword}
          errors={confirmErrors}
        />

        <Button
          variant='contained'
          onClick={handleLogin}
          sx={{
            width: '12rem',
            backgroundColor: 'secondary.dark',
            color: 'primary.light',
          }}
        >
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
};

export default SignUp;
