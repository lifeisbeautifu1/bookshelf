import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ id, author, title, thumbnail, price, genre }) => {
  return (
    <div className="book">
      <img className="book-thumbnail" src={thumbnail} alt={title} />
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
      <p className="book-genre">{genre}</p>
      <p className="book-price">${price}</p>
      <Link className="btn" to={`/dashboard/book/${id}`}>
        read more
      </Link>
    </div>
  );
};

export default Book;
