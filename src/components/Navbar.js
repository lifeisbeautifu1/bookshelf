import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { BsHandbag } from 'react-icons/bs';

const Navbar = () => {
  const { isAuth, state, dispatch } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="logo">Bookshelf</div>
          <ul className="navbar-links">
            <li className={`${isAuth ? 'show' : 'none'}`}>
              <div
                className="cart-button-wrapper"
                onClick={() => dispatch({ type: 'TOGGLE_MODAL' })}
              >
                <BsHandbag />
                <span className="cart-button-amount">{state.amount}</span>
              </div>
            </li>
            <li>
              <Link to="/login" className="navbar-link">
                {isAuth ? 'Logout' : 'Login'}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
