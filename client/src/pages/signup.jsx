import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error } = useSignup();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    await signup(name, email, password);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {error ? <p className='error'>{error}</p> : null}
      <button className='btn btn-primary'>Signup</button>
      <p>By signing up you agree to our Terms of Service</p>
    </form>
  );
};

export default Signup;
