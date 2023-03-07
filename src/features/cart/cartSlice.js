import { createSlice } from '@reduxjs/toolkit';
import { addProductToFirestore } from '../../utils/firebase/firebase.utils';

const CART_STORAGE_KEY = 'cart';

const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem(CART_STORAGE_KEY);
  if (cartData) {
    return JSON.parse(cartData);
  }
  return {
    items: [],
    total: 0,
    quantity: 0,
  };
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: 'cart',
  // initialState: {
  //   items: [],
  //   total: 0,
  //   quantity: 0,
  // },
  initialState: loadCartFromLocalStorage(),

  reducers: {
    addItem: (state, action) => {
      const { id, name, price, imageUrl } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, name, price, quantity: 1, imageUrl });
      }
      state.total += price;
      state.quantity++;
      saveCartToLocalStorage(state);

      // Get the userId from the Redux state
      console.log(action.payload);
      const userId = action.payload.userId;
      console.log(userId);
      addProductToFirestore({ id, name, price, imageUrl }, userId);
    },

    removeItem: (state, action) => {
      const { id, price, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.items = state.items.filter((item) => item.id !== id);
        }
        state.total -= price;
        state.quantity--;
        saveCartToLocalStorage(state);
      }
    },

    updateItemQuantity: (state, action) => {
      const { id, quantity, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        const oldQuantity = existingItem.quantity;
        existingItem.quantity = quantity;
        state.total += (quantity - oldQuantity) * price;
        state.quantity += quantity - oldQuantity;
        saveCartToLocalStorage(state);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.quantity = 0;
      saveCartToLocalStorage(state);
    },
    setProducts: (state, action) => {
      state.items = action.payload;
      const itemCount = state.items.length;
      console.log(itemCount);
      state.quantity = itemCount;
    },
  },
});

export const {
  addItem,
  removeItem,
  updateItemQuantity,
  clearCart,
  setProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
