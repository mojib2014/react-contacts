import React from 'react';
import useFormState from '../../hooks/useFormState';

const LoginForm = () => {
  const { state, handleChange, handleSubmit } = useFormState({
    username: '',
    password: '',
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={state.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
