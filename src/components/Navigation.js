import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Basket from './Basket';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase/firebase.utils';
import { signOut } from '../features/user/userSlice';
import { clearCart } from '../features/cart/cartSlice';

const NavigationBar = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    //clear basket
    dispatch(clearCart());

    dispatch(signOut(user));
    try {
      // sign out the user
      await auth.signOut();

      // do something after signing out if needed
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <AppBar
      position='fixed'
      sx={{ backgroundColor: '#fff', boxShadow: 'none' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ color: '#444', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)' }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ color: '#444' }}>
          Digital Goods
        </Typography>
        <Box sx={{}}>
          <Button
            color='inherit'
            component={Link}
            to='/'
            sx={{
              color: '#444',
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
              marginRight: 2,
            }}
          >
            Home
          </Button>
          <Button
            color='inherit'
            component={Link}
            to='/products'
            sx={{
              color: '#444',
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
              marginRight: 2,
            }}
          >
            Products
          </Button>
          <Button
            color='inherit'
            component={Link}
            to='/about'
            sx={{
              color: '#444',
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
              marginRight: 2,
            }}
          >
            About Us
          </Button>
          <Basket />
          {isLoggedIn ? (
            <Button
              sx={{
                color: 'black',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
                marginRight: 2,
              }}
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          ) : (
            <Button
              component={Link}
              to='/auth'
              sx={{
                color: 'black',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
                marginRight: 2,
              }}
            >
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
