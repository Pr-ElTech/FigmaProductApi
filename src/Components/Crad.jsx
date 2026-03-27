import React from "react";
import Button from "./Button";
import "../CSS/Crad.css";

const Crad = ({ product }) => {
  const CardBtnTex = { text1: "Add to Cart", color: "#02b928" };
  return (
    <div className="Card">
      <img src={product.images} alt="" />
      <span className="Text">
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        {/* <p>${product.description}</p> */}
        <Button item={CardBtnTex} />
      </span>
    </div>
  );
};

export default Crad;
