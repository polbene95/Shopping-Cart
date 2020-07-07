import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch, status, scrollTop }) => {
  const [color, setColor] = useState("orange");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (status === 0) {
      setColor("red");
    } else {
      setColor("green");
    }
  });

  const handleKeyDown = (ev) => {
    if (ev.key === "Enter") {
      onSearch(ev.target.value);
    }
  };

  return (
    <div className="search">
      <input
        className={`search__input ${color}`}
        placeholder="Search by Name, Category or Price"
        onKeyDown={handleKeyDown}
        onChange={(ev) => {
          onSearch(ev.target.value);
          scrollTop(ev);
        }}
      ></input>
      <button className="search__btn btn">Search</button>
    </div>
  );
};

export default SearchBar;
