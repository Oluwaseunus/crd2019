import React from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../utils/firebase';
import useFormState from '../../utils/useFormState';

import './SignIn.scss';

const SignIn = () => {
  const fields = ['email', 'password'];
  const [formState, handleChange, clearForm] = useFormState(fields);

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      clearForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          type='email'
          name='email'
          value={formState.email}
          label='email'
          required
        />

        <FormInput
          handleChange={handleChange}
          type='password'
          name='password'
          value={formState.password}
          label='password'
          required
        />

        <div className='buttons'>
          <CustomButton type='submit' value='Submit Form'>
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
