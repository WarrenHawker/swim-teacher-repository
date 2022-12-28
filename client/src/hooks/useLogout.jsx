import { useAuth } from '../context/authContext';

export const useLogout = () => {
  const { dispatch } = useAuth();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
  };

  return { logout };
};
