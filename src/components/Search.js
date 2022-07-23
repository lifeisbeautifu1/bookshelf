import React from 'react';
import { useGlobalContext } from '../context';
import booksData from '../data';

const Search = () => {
  const { searchData, setSearchData, books, setBooks } = useGlobalContext();
  React.useEffect(() => {
    if (!searchData.searchTerm && !searchData.genre && !searchData.priceSort) {
      setBooks(booksData);
      return;
    }
    setBooks(
      booksData
        .filter((book) =>
          book.title.toLowerCase().includes(searchData.searchTerm)
        )
        .filter((book) => book.genre.toLowerCase().includes(searchData.genre))
        .sort((a, b) => a.price - b.price)
    );
  }, [searchData]);
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSearchData((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };
  console.log(searchData);
  return (
    <div className="search">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="searchTerm">Search for book</label>
        <input
          type="text"
          value={searchData.searchTerm}
          name="searchTerm"
          id="searchTerm"
          onChange={handleChange}
        />
        <label htmlFor="genre">Select Genre</label>
        <select
          name="genre"
          value={searchData.genre}
          id="genre"
          onChange={handleChange}
        >
          <option value="">Choose</option>
          <option value="fantasy">Fantasy</option>
          <option value="dystopian">Dystopian</option>
          <option value="novel">Novel</option>
          <option value="self-development">Self-Development</option>
        </select>
        <div className="form-control">
          <input
            type="checkbox"
            checked={searchData.priceSort}
            name="priceSort"
            id="priceSort"
            onChange={handleChange}
          />
          <label htmlFor="priceSort">Inexpensive first</label>
        </div>
      </form>
    </div>
  );
};

export default Search;
