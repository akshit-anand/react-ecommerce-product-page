import React from "react";
import "./Price.css";

const Price = (props) => {
  return (
    <div className="price">
      <h1 className="disc-price">
        ${props.priceData.discountedPrice + ".00"}{" "}
        <sup>{props.priceData.discount}%</sup>
      </h1>
      <h2 className="base-price">${props.priceData.basePrice + ".00"}</h2>
    </div>
  );
};
export default Price;
