import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import SearchBar from "../components/SearchBar";
import Item from "../components/Item";

import ballons from "../images/ballons.jpeg";
import city from "../images/city.jpeg";
import rover from "../images/rover.jpeg";
import design from "../images/design.jpg";
import photoShooting from "../images/photo-shooting.jpg";
import analist from "../images/analist.jpg";

const productsDummyData = [
  {
    name: "A Weekend Away",
    price: [150, 500],
    image: city,
    category: "experience",
  },
  {
    name: "Web Designer",
    price: [70, 300],
    image: design,
    category: "service",
  },
  {
    name: "Ballon flight",
    price: [50, 200],
    image: ballons,
    category: "experience",
  },
  {
    name: "Data Analist",
    price: [500],
    image: analist,
    category: "service",
  },
  {
    name: "Second Hand Rover",
    price: [1500],
    image: rover,
    category: "good",
  },
  {
    name: "Photo Shoot",
    price: [100],
    image: photoShooting,
    category: "service",
  },
];

const Home = () => {
  const [collapsedBar, setCollapsedBar] = useState(false);
  const [displayText, setDisplaytext] = useState(true);
  const [searchHeight, setSearchHeight] = useState(600);
  const [paddingTop, setPaddingTop] = useState(0);
  // const [searchStatus, setSearchValue] = useState("");
  const [products, setProducts] = useState(productsDummyData);

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
    }
  };

  const scrollToTop = (ev) => {
    const homeElement = ev.target.parentElement.parentElement;
    homeElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToCollapse = (ev) => {
    const homeElement = ev.target.parentElement.parentElement.parentElement;
    homeElement.scrollTo({ top: 500, behavior: "smooth" });
  };

  const searchHandler = (value) => {
    setProducts(
      productsDummyData.filter(
        (el) => el.name.toLowerCase().indexOf(value) !== -1
      )
    );
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
      >
        {displayText ? <h3>Welcome to Shopprina</h3> : null}
        <SearchBar
          onSearch={searchHandler}
          scrollTop={scrollToCollapse}
          status={products.length}
        />
        {displayText ? (
          <p>Millions of products just one click away ...</p>
        ) : null}
      </div>
      <div className="scroll-top" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
      <div className="home__list">
        {products.length === 0 ? (
          <p className="warning">No products found by that query!</p>
        ) : null}
        {products.map((product, index) => (
          <Item product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
