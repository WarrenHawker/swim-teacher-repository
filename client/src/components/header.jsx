import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { useLogout } from '../hooks/useLogout';

const Header = () => {
  const { user } = useAuth();
  const { logout } = useLogout();
  return (
    <header>
      <div className='header-inner'>
        <Link to='/'>
          <h2>SwimHub</h2>
        </Link>

        {!user ? (
          <nav>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </nav>
        ) : (
          <nav>
            {/* dashboard link shows user name */}
            <Link to='/dashboard'>Hello, {user.name}</Link>
            <Link to='/' onClick={logout}>
              Logout
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
