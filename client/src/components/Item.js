import React, { useState } from "react";

const Item = ({ product }) => {
  const { name, price, image, category } = product;

  const setPriceText = () => {
    if (!price[1]) {
      return `${price[0]}$`;
    } else {
      return `${price[0]}$ - ${price[1]}$`;
    }
  };

  return (
    <div className="card">
      <div className={`card__header ${category}`}>
        <img src={image} alt={name} />
      </div>
      <div className="card__body">
        <p className="name">{name}</p>
        <p className="price">{setPriceText()}</p>
      </div>
    </div>
  );
};

export default Item;
