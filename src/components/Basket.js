import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartDropdown from './CartDropdown';
import { useSelector } from 'react-redux';

const Basket = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItemsCount = useSelector((store) => store.cart.quantity);
  console.log(cartItemsCount);
  const handleClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Box sx={{ color: 'black', display: 'inline-block' }}>
      <IconButton aria-label='cart' onClick={handleClick}>
        <Badge badgeContent={cartItemsCount} color='error'>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      {isCartOpen && <CartDropdown />}
    </Box>
  );
};

export default Basket;
