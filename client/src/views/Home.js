import React, { useState } from "react";

import SearchBar from "../components/SearchBar";

const Home = () => {
  const [collapsedBar, setCollapsedBar] = useState(false);
  const [displayText, setDisplaytext] = useState(true);
  const [searchHeight, setSearchHeight] = useState(600);
  const [paddingTop, setPaddingTop] = useState(0);

  const onScrollDown = (ev) => {
    let scrollPosition = ev.target.scrollTop;
    let newHeight = 600 - scrollPosition;

    if (newHeight <= 150) {
      setDisplaytext(false);
    } else {
      setDisplaytext(true);
    }

    if (newHeight <= 100) {
      setSearchHeight(100);
      setCollapsedBar(true);
      setPaddingTop(0);
    } else {
      setSearchHeight(newHeight);
      setCollapsedBar(false);
      setPaddingTop(scrollPosition);
      //Go back to Normal bar
    }
  };

  const scrollParent = (ev) => {
    const homeSearch = ev;
    console.log("qhbc");

    window.onscroll = (ev) => {
      console.log("hell");
    };
  };

  return (
    <div
      className={`home ${collapsedBar ? "collapse" : ""}`}
      onScroll={onScrollDown}
      style={{
        paddingTop: paddingTop,
      }}
    >
      <div
        className="home__search"
        style={{
          height: searchHeight,
          minHeight: searchHeight,
        }}
        onMouseOver={scrollParent}
      >
        {displayText ? <h3>Welcome to Shopprina</h3> : null}
        <SearchBar />
        {displayText ? (
          <p>Millions of products just one click away ...</p>
        ) : null}
      </div>

      <div className="home__list">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Home;
