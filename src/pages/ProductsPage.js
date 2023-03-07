import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../features/cart/cartSlice';
import SHOP_DATA from '../shop-data';

const Products = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const userId = currentUser ? currentUser.uid : null;

  const categoryIndex = SHOP_DATA.findIndex(
    (shopDataItem) => shopDataItem.title === category
  );
  const productList = SHOP_DATA[categoryIndex]?.items || [];
  console.log(productList);

  const handleAddToCart = (product) => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: 1,
        userId,
      })
    );
  };

  return (
    <Box sx={{ backgroundColor: '#f4f4f4', paddingTop: 10 }}>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          {productList.map((product) => (
            <Box
              key={product.id}
              sx={{
                backgroundColor: '#fff',
                borderRadius: 5,
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
                padding: 2,
                margin: 3,
                width: '30%',
              }}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: '100%' }}
              />
              <Typography
                variant='h6'
                component='div'
                sx={{ color: '#444', marginTop: 1 }}
              >
                {product.name}
              </Typography>
              <Typography variant='body1' sx={{ color: '#444', marginTop: 1 }}>
                {product.description}
              </Typography>
              <Typography variant='h6' sx={{ color: '#444', marginTop: 1 }}>
                ${product.price}
              </Typography>
              <Button
                variant='contained'
                sx={{ marginTop: 2 }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Products;
