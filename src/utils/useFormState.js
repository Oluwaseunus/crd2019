import React from 'react';

const useFormState = elements => {
  const initialState = {};

  elements.forEach(e => {
    initialState[e] = '';
  });

  const [formState, setFormState] = React.useState(initialState);

  const clearForm = () => {
    setFormState(initialState);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return [formState, handleChange, clearForm];
};

export default useFormState;
