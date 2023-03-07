import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInStart(state) {
      state.isLoading = true;
    },
    signInSuccess(state, action) {
      console.log('it is CALLLED');
      console.log(state);
      state.isLoading = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
      state.error = null;
    },
    signInFailure(state, action) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.currentUser = null;
      state.error = action.payload;
    },
    signOut(state) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.currentUser = null;
      state.error = null;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, signOut } =
  userSlice.actions;

export default userSlice.reducer;
