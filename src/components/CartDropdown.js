import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CartItem from './CartItem';

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  //   const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  if (!cartItems) {
    return (
      <Box sx={{ p: 2, textAlign: 'center', color: 'black' }}>
        Your cart is empty
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '100%',
        right: 0,
        zIndex: 1,
        minWidth: 300,
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        borderRadius: 5,
        overflow: 'hidden',
      }}
    >
      {cartItems.length > 0 ? (
        <>
          <Box sx={{ p: 2 }}>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </Box>
          <Button
            variant='contained'
            fullWidth
            sx={{ backgroundColor: '#000', color: '#fff' }}
          >
            Go to checkout
          </Button>
        </>
      ) : (
        <Box sx={{ p: 2, textAlign: 'center' }}>Your cart is empty</Box>
      )}
    </Box>
  );
};

export default CartDropdown;
