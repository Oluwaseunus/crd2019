import React from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { signInWithGoogle } from '../../utils/firebase';
import useFormState from '../../utils/useFormState';

import './SignIn.scss';

const SignIn = () => {
  const fields = ['email', 'password'];
  const [formState, handleChange, clearForm] = useFormState(fields);

  const handleSubmit = e => {
    e.preventDefault();
    clearForm();
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
            Submit
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
