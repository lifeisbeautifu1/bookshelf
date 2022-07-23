import React from 'react';
import Search from '../components/Search';
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <Search />
        <BookList />
        <Pagination />
      </div>
    </>
  );
};

export default Dashboard;
