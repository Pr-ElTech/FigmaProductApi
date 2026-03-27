import React from "react";
import "../CSS/Header.css";
import Button from "./Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/logo.jpeg";
import { BsShop } from "react-icons/bs";

const Header = () => {
  const headerBtn = [
    { text1: "Register" },
    { text1: "Login", color: " #02b928" },
  ];
  return (
    <header>
      <article>
        <div className="logobar">
          <img src={logo} alt="" />
          <span className="text1">
            <p className="text2">Home</p>
            <p>Stores</p>
          </span>
        </div>

        <div className="center">
          <input type="text" placeholder="search for food item" />
          <span className="btn">Search</span>
        </div>
        <div className="rightS">
          <div className="StoreH">
            <AiOutlineShoppingCart className="Store" />
            <BsShop className="shop" />
          </div>
          <div className="btnC">
            {headerBtn.map((item, index) => (
              <Button key={index} item={item} className="Btngoods" />
            ))}
          </div>
        </div>
      </article>
    </header>
  );
};

export default Header;
