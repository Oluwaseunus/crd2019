import React from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../utils/firebase';
import useFormState from '../../utils/useFormState';

import './SignUp.scss';

const SignUp = () => {
  const fields = ['displayName', 'email', 'password', 'confirmPassword'];
  const [formState, handleChange, clearForm] = useFormState(fields);

  const handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = formState;

    if (password !== confirmPassword) {
      alert(`passwords don't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      clearForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={formState.displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={formState.email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={formState.password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={formState.confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />

        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
