import React from 'react';

const AppContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return { ...state, isModalOpen: !state.isModalOpen };
    case 'ADD_ITEM':
      if (state.cartItems.find((item) => item.id === action.item.id))
        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            if (item.id === action.item.id)
              return { ...item, amount: item.amount + 1 };
            return item;
          }),
        };
      return { ...state, cartItems: [...state.cartItems, action.item] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.id),
      };
    case 'INCREMENT_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.id)
            return { ...item, amount: item.amount + 1 };
          return item;
        }),
      };
    case 'DECREMENT_ITEM':
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => {
            if (item.id === action.id)
              return { ...item, amount: item.amount - 1 };
            return item;
          })
          .filter((item) => item.amount > 0),
      };
    case 'CALCULATE': {
      return {
        ...state,
        amount: state.cartItems.reduce(
          (totalAmount, item) => (totalAmount += item.amount),
          0
        ),
        total: state.cartItems
          .reduce((totalSum, item) => (totalSum += item.amount * item.price), 0)
          .toFixed(2),
      };
    }
    default:
      return state;
  }
};

const initialState = {
  isModalOpen: false,
  cartItems: [],
  total: 0,
  amount: 0,
};

const AppContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({ name: '', password: '', email: '' });
  const [books, setBooks] = React.useState([]);
  const [searchData, setSearchData] = React.useState({
    searchTerm: '',
    genre: '',
    priceSort: false,
  });
  const [isAuth, setIsAuth] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [booksPerPage, setBooksPerPage] = React.useState(4);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  React.useEffect(() => {
    dispatch({ type: 'CALCULATE' });
  }, [state.cartItems]);
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isAuth,
        setIsAuth,
        books,
        setBooks,
        searchData,
        setSearchData,
        state,
        dispatch,
        currentPage,
        setCurrentPage,
        booksPerPage,
        setBooksPerPage,
        paginate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export default AppContextProvider;
