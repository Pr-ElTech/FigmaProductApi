import React, { useEffect, useState } from "react";
import Button from "./Button";
import Footer12 from "../assets/footerimg.png";
import { FaChevronCircleRight } from "react-icons/fa";
import Header from "./Header";
import "../CSS/Hero.css";
import axios from "axios";

const Hero = () => {
  const btnText = { text1: "Shop now", width: "200px" };
  const heroData = ["Buy", "Store", "Sell"];
  const [storeData, setStoreData] = useState([]);
  const [currentText, setCurrentText] = useState(0);

  const apiData = async () => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      setStoreData(res.data);
    } catch (error) {
      console.log("ERROR FETCHING DATA", error.message);
    }
  };

  useEffect(() => {
    apiData();
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="HeroPage">
      <Header />
      <div className="hero">
        <div className="textH-Ctn">
          <h1>
            we <span className="textH"> {heroData[currentText]} </span> All
            kinds of Fresh grocery
          </h1>
          <Button item={btnText} />
        </div>
        <div className="imgH-Ctn">
          <img src={Footer12} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
