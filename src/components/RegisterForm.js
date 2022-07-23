import React from 'react';
import { useGlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
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
    if (!user.name || !user.password || !user.email) {
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
          <h1 className="form-name">Sign up</h1>
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
            <label htmlFor="name">Email</label>
            <input
              value={user.email}
              type="email"
              name="email"
              id="email"
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
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
