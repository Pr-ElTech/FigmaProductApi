import React from "react";
import "../CSS/Button.css";
const Button = ({ item }) => {
  return <button style={{ backgroundColor: item.color }}>{item.text1}</button>;
};

export default Button;
