import React, { useEffect, useState } from "react";
import Crad from "./Crad";
import "../CSS/Body.css";
import axios from "axios";
import toast from "react-hot-toast";
import Header from "./Header";
import { BounceLoader } from "react-spinners";

const Body = () => {
  const [product, setproduct] = useState([]);
  const [isloading, setisloading] = useState(true);
  const baseUrl = "http://localhost:8001/";
  const [activeUser, setActiveUser] = useState([]);
  // const ApiItems = async () => {
  //   try {
  //     const response = await fetch("https://api.escuelajs.co/api/v1/products");
  //     if (!response.ok) throw new Error("Failed to fetch Api  Products");
  //     const datas = await response.json();
  //     setproduct(datas);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // useEffect(() => {
  //   ApiItems();
  // }, []);

  const fetchData = async () => {
    try {
      const productA = await axios.get(
        "https://api.escuelajs.co/api/v1/products",
      );
      setproduct(productA.data);
      setisloading(false);
      toast.success("prducts successful");
    } catch (Error) {
      toast.error("failed to load");
      throw new Error(`Error fecthing Api ${Error.message}`);
    }
  };

  const usersId = async () => {
    try {
      const res = await axios.get(`${baseUrl}users`);
      setActiveUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // const displayBtn=()=>{
  //   if
  // }
  useEffect(() => {
    fetchData();

    // toast.promise(fetchData(), {
    //   loading: "Loading products...",
    //   success: "Inventory ready!",
    //   error: "Could not fetch data.",
    // });
  }, []);

  //   if (isloading) {
  //     toast.loading("Loading products...");
  //     return <BounceLoader color="#25e521" />
  // ;
  //   }

  return (
    <section className="Body">
      <Header />
      <article className="IntroTextA">
        <h1>All Products</h1>
        <p>
          start shopping from the <br />
          finest selection of fresh products
        </p>
      </article>

      {isloading ? (
        <>
          <h1>Loading...</h1>
          <BounceLoader color="#25e521" />
        </>
      ) : (
        <article className="cardCont">
          {product.map((items) => (
            <Crad activeUser={activeUser} key={items.id} product={items} />
          ))}
        </article>
      )}
    </section>
  );
};

export default Body;
