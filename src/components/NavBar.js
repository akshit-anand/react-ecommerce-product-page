import React from "react";
import "./NavBar.css";
import profileAvatar from "../images/image-avatar.png";
import Cart from "./Cart";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <div className="left">
        <a href="https://" className="logo">
          sneakers
        </a>

        <a href="https://" className="links">
          Collections
        </a>

        <a href="https://" className="links">
          Men
        </a>

        <a href="https://" className="links">
          Women
        </a>

        <a href="https://" className="links">
          About
        </a>

        <a href="https://" className="links">
          Contact
        </a>
      </div>
      <div className="right">
        <Cart cartData={props.cartData} />
        <div className="nav-icons">
          <img
            src={profileAvatar}
            alt="profile-avatar"
            className="profile-avatar nav-img"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
