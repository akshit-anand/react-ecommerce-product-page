import React, { useState } from "react";
import "./ProductDetails.css";
import Price from "./Price";
import CartButton from "./CartButton";

const ProductDetails = (props) => {
  //storing quantity value
  const [quantity, setQuantity] = useState(0);

  //increasing the quantity when click on plus button
  function increase() {
    setQuantity(quantity + 1);
  }
  //decreasing the quantity when click on minus button and adding a condition where check if the value is 0 then stop decreasing to avoid negative value
  function decrease() {
    if (quantity === 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  }
  function addToCart() {
    const productCartData = {
      name: props.productData.name,
      discountedPrice: props.productData.discountedPrice,
      quantity: quantity,
    };
    props.onSaveProductData(productCartData);
  }
  return (
    <div className="product-details flex-content">
      <h5 className="company-name">{props.productData.companyName}</h5>
      <h1 className="product-name">{props.productData.name}</h1>
      <p className="product-description">{props.productData.desc}</p>
      <Price priceData={props.productData} />
      <CartButton
        quantity={quantity}
        onIncrease={increase}
        onDecrease={decrease}
        onAddToCart={addToCart}
      />
    </div>
  );
};

export default ProductDetails;
