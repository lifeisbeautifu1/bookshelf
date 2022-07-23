import React from 'react';
import { useGlobalContext } from '../context';
import { FaTimes, FaChevronUp, FaChevronDown } from 'react-icons/fa';

const Modal = () => {
  const { state, dispatch } = useGlobalContext();
  const modalWrapperRef = React.useRef();
  const toggleModal = (e) => {
    if (e.target === modalWrapperRef.current)
      dispatch({ type: 'TOGGLE_MODAL' });
  };
  React.useEffect(() => {
    window.addEventListener('click', toggleModal);
    return () => window.removeEventListener('click', toggleModal);
  }, []);
  return (
    <div
      ref={modalWrapperRef}
      className={`modal-wrapper ${state.isModalOpen ? 'show' : 'none'}`}
    >
      <div className="modal-body">
        <FaTimes
          className="close-modal-btn"
          onClick={() => dispatch({ type: 'TOGGLE_MODAL' })}
        />
        <h1 className="modal-header">Your bag</h1>
        <div className="cart-items-wrapper">
          {state.cartItems.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="cart-item-thumbnail"
                />
                <div className="cart-item-info">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">${item.price}</p>
                  <button
                    className="cart-item-remove-btn"
                    onClick={() => {
                      dispatch({ type: 'REMOVE_ITEM', id: item.id });
                    }}
                  >
                    remove
                  </button>
                </div>
                <div className="cart-item-toggle">
                  <FaChevronUp
                    className="item-toggle"
                    onClick={() =>
                      dispatch({ type: 'INCREMENT_ITEM', id: item.id })
                    }
                  />
                  <span className="cart-item-amount">{item.amount}</span>
                  <FaChevronDown
                    className="item-toggle"
                    onClick={() =>
                      dispatch({ type: 'DECREMENT_ITEM', id: item.id })
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="underline"></div>
        <div className="modal-total">
          <h2>Total:</h2>
          <h2>${state.total}</h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
