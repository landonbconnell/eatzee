import * as React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/system';

const WelcomePage = () => {
  const theme = useTheme();

  const WelcomePageBoxStyles = {
    minWidth: '20rem',
    maxWidth: '30rem',
    minHeight: '25rem',
    padding: '2rem',
    borderRadius: '2.5rem',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    backgroundColor: 'primary.light',
    [theme.breakpoints.down('sm')]: {
      minWidth: '10rem',
      maxWidth: '20rem',
      padding: '1rem',
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'secondary.light',
      }}
    >
      <Box sx={WelcomePageBoxStyles}>
        <Stack direction='column' alignItems='center' justifyContent='center'>
          <Typography
            variant='h5'
            sx={{ padding: '1rem 0 1rem 0', fontWeight: 'bold' }}
          >
            Welcome to Eatzier!
          </Typography>
          <Typography paragraph sx={{ padding: '0 1rem 0 1rem' }}>
            Here, we believe meal planning and grocery shopping should be
            exciting, not exhausting.
          </Typography>
          <Typography paragraph sx={{ padding: '0 1rem 0 1rem' }}>
            Eatzier personalizes daily meal plans across all meals, providing
            recipes aligned with your tastes. Our seamless integration with
            major grocery retailers lets you add ingredients to your cart with
            one click for effortless shopping or pickup.
          </Typography>
          <Typography paragraph sx={{ padding: '0 1rem 0 1rem' }}>
            With Eatzier, reclaim time, minimize stress, and rediscover the joy
            of cooking - making life 'eatzier' one meal at a time!
          </Typography>
          <Button
            variant='contained'
            sx={{
              backgroundColor: 'secondary.dark',
              color: 'primary.light',
              width: '10rem',
              margin: '0.5rem',
            }}
          >
            Get Started
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default WelcomePage;
