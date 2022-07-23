import React from 'react';
import { useGlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const { user, setUser, setIsAuth } = useGlobalContext();
  const navigate = useNavigate();
  const handleInput = (e) => {
    setUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.name || !user.password) {
      return;
    }
    setIsAuth(true);
    navigate('/dashboard');
    console.log(user);
  };
  return (
    <div className="body-wrapper">
      <div className="form-wrapper">
        <form className="form">
          <h1 className="form-name">Login</h1>
          <div>
            <label htmlFor="name">Name</label>
            <input
              value={user.name}
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={user.password}
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Login
          </button>
          <Link to="/register" className="register-link">
            Don't have an account? Create one!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
