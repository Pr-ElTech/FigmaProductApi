import React, { useState } from "react";
import "../CSS/Header.css";
import Button from "./Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/logo.jpeg";
import { BsShop } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  const loginNav = () => {
    navigate("/login");
  };
  const signupNav = () => {
    navigate("/signup");
  };

  const logout = async () => {
    try {
      const res = await axios.delete(`${baseUrl}users/logout`);
      if (res.status === 200) {
        toast.success("Logout successful ✔");
        navigate("/login");
      } else {
        toast.error("Logout failed ❌");
      }
    } catch (error) {
      toast.error("An error occurred during logout.");
    }
  };
  const headerBtn = [
    { text1: "Register", onClick: signupNav, display: "none" },
    { text1: "Login", color: " #02b928", onClick: loginNav, display: "none" },
    { text1: "Logout", color: " #02b928", onClick: logout, display: "block" },
  ];

  // const [navigate, setNavigate] = useState(null);

  // const loginNav = () => {
  //   navigate("./signup/login");
  // };
  // const signupNav = () => {
  //   navigate("./signup");
  // };

  // const loginNav = () => {
  //   setNavigate("Login");
  //   navigate === "Login" ? <Login /> : null;
  // };
  // const signupNav = () => {
  //   setNavigate("Signup");
  //   navigate === "Signup" ? <SignupPage /> : null;
  // };

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
              <Button key={index} item={item} className={"Btngoods"} />
            ))}
          </div>
        </div>
      </article>
    </header>
  );
};

export default Header;
