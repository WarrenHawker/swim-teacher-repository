import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import SingleEntry from './pages/singleEntry';
import { useAuth } from './context/authContext';

const App = () => {
  const { user } = useAuth();
  console.log('app: ', user);
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route
            path='/login'
            element={!user ? <Login /> : <Navigate to='/dashboard' />}></Route>
          <Route
            path='/signup'
            element={!user ? <Signup /> : <Navigate to='/dashboard' />}></Route>
          <Route
            path='/dashboard'
            element={user ? <Dashboard /> : <Navigate to='/login' />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
