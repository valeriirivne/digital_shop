import SignInForm from '../components/Sign-in';
import SignUpForm from '../components/Sign-up-form';
import { Grid } from '@mui/material';

const Authentication = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <SignInForm />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SignUpForm />
      </Grid>
    </Grid>
  );
};

export default Authentication;
