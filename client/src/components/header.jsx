import { Link } from "react-router-dom";

const Header = () => {
  const user = "ljklkj";
  return (
    <header>
      <div className="header-inner">
        <Link to="/">
          <h2>SwimHub</h2>
        </Link>

        {!user ? (
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </nav>
        ) : (
          <nav>
            {/* dashboard link shows user name */}
            <Link to="/dashboard">Hello, {user}</Link>
            <Link to="/">Logout</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
