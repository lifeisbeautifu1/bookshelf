import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';

const SingleBook = () => {
  const { id } = useParams();
  const { books, dispatch } = useGlobalContext();
  const [currentBook, setCurrentBook] = React.useState('');
  function addItem() {
    dispatch({ type: 'ADD_ITEM', item: { ...currentBook, amount: 1 } });
  }
  React.useEffect(() => {
    setCurrentBook(books.find((book) => book.id === +id));
  }, []);
  return (
    <div className="book-container">
      <div className="single-book">
        <img src={currentBook.thumbnail} alt={currentBook.title} />
        <div className="single-book-info">
          <p className="single-book-title">{currentBook.title}</p>
          <p className="single-book-author">{currentBook.author}</p>
          <p className="single-book-genre">{currentBook.genre}</p>
          <p className="single-book-description">{currentBook.description}</p>
          <p className="single-book-price">${currentBook.price}</p>
          <button className="btn" onClick={addItem}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
