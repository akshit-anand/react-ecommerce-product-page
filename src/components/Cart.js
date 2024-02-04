import React, { useState } from "react";
import iconCart from "../images/icon-cart.svg";
import "./Cart.css";

const Cart = (props) => {
  //storing navbar cart dropdown css property
  const [visibility, setVisibility] = useState("hidden");

  //multiplying price with quantity and storing in variable
  let totalItemPrice = props.cartData.discountedPrice * props.cartData.quantity;

  // function to display and hide cart dropdown
  function showCart() {
    if (visibility === "hidden") {
      setVisibility("visible");
    } else {
      setVisibility("hidden");
    }
  }
  //wherever click on window hide navbar cart
  //not working need to find alternative
  window.onClick = function () {
    if (visibility === "visible") {
      setVisibility("hidden");
    }
  };
  //storing passed cartData to variable
  //mainly for adding condition to display message when cart is empty
  //can see the condition with && down in the jsx
  //here check object length, if with arrays just simply do props.cartData.length
  const checkCartData = Object.keys(props.cartData);
  return (
    <>
      <div className="nav-icons icon-cart">
        <img
          src={iconCart}
          alt="cart-icon"
          className="cart-icon nav-img"
          onClick={showCart}
        />{" "}
        <span className="cart-value">{props.cartData.quantity}</span>
      </div>
      <div className={`cart-dropdown ${visibility}`}>
        <h4>Cart</h4>
        <hr />
        {checkCartData.length === 0 && (
          <p className="cart-empty-msg">Your cart is empty</p>
        )}
        {checkCartData.length > 0 && (
          <div className="cart-content">
            <div className="cart-product">
              <div className="cart-product-image">
                <img
                  src={process.env.PUBLIC_URL + "image-product-1-thumbnail.jpg"}
                  alt="product"
                />
              </div>
              <div className="cart-product-details">
                <p className="cart-product-name">{props.cartData.name}</p>
                <p className="cart-product-price">
                  {`$${props.cartData.discountedPrice}.00  x  ${props.cartData.quantity}`}{" "}
                  <span>{`$${totalItemPrice}.00`}</span>
                </p>
              </div>
            </div>
            <div className="checkout-button">
              <button>Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
