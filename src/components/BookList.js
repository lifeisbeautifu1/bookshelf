import React from 'react';
import { useGlobalContext } from '../context';
import Book from './Book';

const BookList = () => {
  const { books, currentPage, booksPerPage } = useGlobalContext();
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  return (
    <div className="book-list">
      <h1>Our Bookshelf</h1>
      <div className="books-wrapper">
        {currentBooks.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
