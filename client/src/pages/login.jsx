import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    login(email, password);
  };

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
      {error ? <p className='error'>{error}</p> : null}
      <button className='btn btn-primary'>Login</button>
      <div className='forgot-password'>
        <Link to='/password-recovery'>Forgot your password?</Link>
      </div>
    </form>
  );
};

export default Login;
