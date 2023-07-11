import * as React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/system';

const GettingStarted = () => {
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
            Getting To Know You
          </Typography>
          <Typography paragraph sx={{ padding: '0 1rem 0 1rem' }}>
            We are very excited for you to get started, but first, we need to
            learn a little bit about you! This will help us tailer Eatzier to
            your unique lifestyle. Your responses will be kept private and will
            only be used to enhance your experience with us.
          </Typography>

          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={{ width: '100%' }}
          >
            <Button
              variant='contained'
              sx={{
                backgroundColor: 'secondary.dark',
                color: 'primary.light',
                width: '10rem',
                margin: '0.5rem',
              }}
            >
              Back
            </Button>
            <Button
              variant='contained'
              sx={{
                backgroundColor: 'secondary.dark',
                color: 'primary.light',
                width: '10rem',
                margin: '0.5rem',
              }}
            >
              Next
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default GettingStarted;
