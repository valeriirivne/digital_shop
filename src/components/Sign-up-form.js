import { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth } from '../utils/firebase/firebase.utils';
import { db } from '../utils/firebase/firebase.utils';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      // register new user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // save user data to Firestore
      // const db = getFirestore();
      const userData = { name, email };
      await setDoc(doc(db, 'users', user.uid), userData);

      // clear form fields
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ height: '100vh' }}
    >
      {' '}
      Don't have an account? SIGN UP with your email and password
      <Grid item xs={10} sm={6} md={4}>
        <form onSubmit={handleRegistration} sx={{ textAlign: 'left' }}>
          <TextField
            label='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin='normal'
            required
            fullWidth
          />
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
            Sign Up
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignUpForm;
