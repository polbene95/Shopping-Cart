import React from "react";

const SearchBar = () => {
  return (
    <div className="search">
      <input
        className="search__input"
        // placeholder="Search for any product in Shopprina"
      ></input>
      <button className="search__btn btn">Search</button>
    </div>
  );
};

export default SearchBar;
