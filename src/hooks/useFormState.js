import { useState } from 'react';

export default function useFormState(initialState = {}) {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return { handleChange, handleSubmit, state };
}
