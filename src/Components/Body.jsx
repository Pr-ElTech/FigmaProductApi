import React, { useEffect, useState } from "react";
import Crad from "./Crad";
import "../CSS/Body.css";

const Body = () => {
  const [product, setproduct] = useState([]);
  const ApiItems = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if (!response.ok) throw new Error("Failed to fetch Api  Products");
      const datas = await response.json();
      setproduct(datas);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    ApiItems();
  }, []);

  return (
    <section className="Body">
      <article className="IntroTextA">
        <h1>All Products</h1>
        <p>
          start shopping from the <br />
          finest selection of fresh products
        </p>
      </article>

      <article className="cardCont">
        {product.map((items) => (
          <Crad key={items.id} product={items} />
        ))}
      </article>
    </section>
  );
};

export default Body;
