import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Grid } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInSuccess, signInFailure } from '../features/user/userSlice';
import { db, auth } from '../utils/firebase/firebase.utils';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { setProducts } from '../features/cart/cartSlice';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const currentUser = useSelector((state) => state.user.currentUser);
  const userId = currentUser ? currentUser.uid : null;
  console.log(userId);
  const dispatch = useDispatch();
  console.log(auth);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // sign in with email and password
      console.log(email, password);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log(userCredential);
      console.log(user);
      console.log(user.uid);

      // dispatch sign-in success action with user object as payload
      dispatch(signInSuccess(user));

      // clear form fields
      setEmail('');
      setPassword('');
    } catch (error) {
      setError(error.message);
      // dispatch sign-in failure action with error message as payload
      dispatch(signInFailure(error.message));
    }
  };

  useEffect(() => {
    //   // get the user's collection
    if (userId) {
      const userCollection = collection(db, 'users', userId, 'cart');
      console.log(userCollection);
      // listen for changes in the user's collection
      const unsubscribe = onSnapshot(userCollection, (querySnapshot) => {
        console.log(querySnapshot);
        const products = [];
        console.log(products);
        querySnapshot.forEach((doc) => {
          console.log(doc);
          const product = doc.data();
          console.log(product);
          products.push(product);
          console.log(products);
        });
        // update the Redux store with the products from the user's collection
        dispatch(setProducts(products));
      });
      // return a cleanup function to unsubscribe from the snapshot listener
      return () => {
        unsubscribe();
      };
    }
  }, [userId, dispatch]);

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ height: '100vh' }}
    >
      {' '}
      SIGN IN
      <Grid item xs={10} sm={6} md={4}>
        <form onSubmit={handleSignIn} sx={{ textAlign: 'left' }}>
          {error && <div>{error}</div>}
          <TextField
            label='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin='normal'
            required
            fullWidth
          />
          <TextField
            label='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin='normal'
            required
            fullWidth
          />
          <Button type='submit' variant='contained' fullWidth>
            Sign In
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignInForm;
