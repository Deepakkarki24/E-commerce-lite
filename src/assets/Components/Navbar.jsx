import React from "react";
import logo from "../images/logo.png";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = ({ setCartState }) => {
  return (
    <nav className="nav_bar">
      <div className="nav_left">
        <div className="logo_bx">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav_items">
          <ul>
            <li>Home</li>
            <li style={{ display: "flex", alignItems: "center" }}>
              Shop <IoIosArrowDown />
            </li>
            <li>Favourites</li>
            <li>Orders</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="nav_right">
        <div onClick={() => setCartState(true)} className="cart_bx">
          <FiShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
