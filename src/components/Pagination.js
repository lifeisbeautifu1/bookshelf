import React from 'react';
import { useGlobalContext } from '../context';

const Pagination = () => {
  const { paginate, booksPerPage, books, currentPage } = useGlobalContext();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(books.length / booksPerPage); ++i)
    pageNumbers.push(i);
  console.log(pageNumbers);
  return (
    <div className="pagination-wrapper">
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              class={currentPage === number ? 'page active' : 'page'}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
