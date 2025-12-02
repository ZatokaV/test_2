import styles from "./item.css";

import React from "react";

export default function Card({
  title,
  price,
  oldPrice,
  image,
  discount,
  colors,
}) {
  return (
    <article className="product-card">
      <div className="product-card__photo">
        <img src={image} alt="title" className="product-card__image" />
        {discount && (
          <div className="product-card__badge--wrapper">
            <span className="product-card__badge--text">{discount}</span>
          </div>
        )}
      </div>

      <div className="product-card__details">
        <div className="product-card__details--top">
          <h3 className="product-card__title">{title}</h3>
          <button className="product-card__favorite" type="button">
            <img
              src="/icons/star.svg"
              alt="Add to favorite"
              className="star__img star__img--empty"
            />

            <img
              src="/icons/star-white.svg"
              alt="Added to favorite"
              className="star__img star__img--filled"
            />
          </button>
        </div>

        <div className="product-card__price--box">
          {oldPrice ? (
            <>
              <span className="product-card__price">{price.toFixed(2)} €</span>
              <span className="product-card__price--old">
                {oldPrice.toFixed(2)} €
              </span>
            </>
          ) : (
            <span className="product-card__price">{price.toFixed(2)} €</span>
          )}
        </div>
        <div className="product-card__colors">
          {colors &&
            colors.map((color, index) => (
              <span
                key={index}
                className="product-card__color--dot"
                style={{ backgroundColor: color }}
                data-color={color}
              ></span>
            ))}
        </div>
      </div>
    </article>
  );
}
