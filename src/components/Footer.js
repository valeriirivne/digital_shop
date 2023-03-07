import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f4f4f4',
        paddingTop: 20,
        marginTop: 10,
        minHeight: '100vh',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' component='h2' gutterBottom>
              About US
            </Typography>
            <Typography variant='body1' sx={{ mb: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              malesuada turpis non purus consequat, a dictum elit commodo. Sed
              interdum tempus ligula, et aliquet arcu blandit non.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' component='h2' gutterBottom>
              Contact Us
            </Typography>
            <Typography variant='body1' sx={{ mb: 2 }}>
              Address: Somewhere in Ukraine
            </Typography>
            <Typography variant='body1' sx={{ mb: 2 }}>
              Phone: +380111111111
            </Typography>
            <Typography variant='body1' sx={{ mb: 2 }}>
              Email:{' '}
              <Link href='mailto:support@example.com' color='inherit'>
                digital_shop@gmail.com
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' component='h2' gutterBottom>
              Follow Us
            </Typography>
            <Typography variant='body1' sx={{ mb: 2 }}>
              <Link href='#' color='inherit'>
                Facebook
              </Link>
            </Typography>
            <Typography variant='body1' sx={{ mb: 2 }}>
              <Link href='#' color='inherit'>
                Twitter
              </Link>
            </Typography>
            <Typography variant='body1' sx={{ mb: 2 }}>
              <Link href='#' color='inherit'>
                Instagram
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Typography variant='body2' align='center' color='text.secondary'>
          © {new Date().getFullYear()} My Store. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
