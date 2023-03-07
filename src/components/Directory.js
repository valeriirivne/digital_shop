import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { banners } from '../shop-data';

const Directory = () => {
  return (
    <Box sx={{ backgroundColor: '#f4f4f4', paddingTop: 20 }}>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}
        >
          {banners.map((banner) => (
            <Box
              key={banner.id}
              sx={{
                backgroundColor: banner.backgroundColor,
                borderRadius: 5,
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
                flexBasis: '30%',
                padding: 2,
                margin: 3,
              }}
            >
              <Link to={`/products/${banner.title}`}>
                <Box
                  sx={{
                    height: 100,
                    width: '100%',
                    overflow: 'hidden',
                    borderRadius: 5,
                  }}
                >
                  <img
                    src={banner.imageUrl}
                    alt={banner.title}
                    style={{ maxWidth: '100%' }}
                  />
                </Box>
                <Typography
                  variant='h6'
                  component='div'
                  sx={{ color: '#444', marginTop: 1 }}
                >
                  {banner.title}
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ color: '#444', marginTop: 1 }}
                >
                  {banner.description}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Directory;
