import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="body-wrapper">
      <h1>Error</h1>
      <p>Page you are looking for are not found!</p>
      <Link className="btn" to="/">
        go home
      </Link>
    </div>
  );
};

export default Error;
