import { Link } from 'react-router-dom';

const Header = () => {
  const user = null;
  return (
    <header>
      <Link to='/'>
        <h2>SwimHub</h2>
      </Link>

      {!user ? (
        <nav>
          <Link to='/login' className='active'>
            Login
          </Link>
          <Link to='/signup'>Signup</Link>
        </nav>
      ) : (
        <nav>
          {/* dashboard link shows user name */}
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/'>Logout</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
