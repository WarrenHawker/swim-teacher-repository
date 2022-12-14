import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const formSubmitHandler = () => {};

  return (
    <form onSubmit={formSubmitHandler}>
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
      <p className='error'>error message</p>
      <button className='btn btn-primary'>Login</button>
    </form>
  );
};

export default Login;
