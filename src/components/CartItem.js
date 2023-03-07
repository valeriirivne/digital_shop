import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateItemQuantity, removeItem } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    dispatch(updateItemQuantity({ id: item.id, quantity: newQuantity }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #eee',
        paddingBottom: 1,
        marginBottom: 1,
      }}
    >
      <Box sx={{ width: 100 }}>
        <img src={item.imageUrl} alt={item.name} style={{ width: '100%' }} />
      </Box>
      <Box sx={{ flexGrow: 1, paddingLeft: 2 }}>
        <Typography variant='subtitle1' component='div'>
          {item.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {item.quantity} x ${item.price.toFixed(2)}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
          <Typography variant='body2' sx={{ paddingRight: 1 }}>
            Quantity:
          </Typography>
          <input
            type='number'
            min={1}
            max={10}
            value={item.quantity}
            onChange={handleQuantityChange}
            style={{ width: 50 }}
          />
        </Box>
      </Box>
      <Box sx={{ paddingRight: 2 }}>
        <IconButton onClick={handleRemoveFromCart}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItem;
