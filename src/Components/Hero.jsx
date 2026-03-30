import React from "react";
import Button from "./Button";
import Footer12 from "../assets/footerimg.png";
import { FaChevronCircleRight } from "react-icons/fa";

const Hero = () => {
  const btnText = { text1: "Shop now" };
  return (
    <section>
      <div>
        <h5>
          Make healthy life with <b>fresh</b>
          grocery
        </h5>
        <Button item={btnText} />
      </div>
      <div>
        <img src={Footer12} alt="" />
        <FaChevronCircleRight />
      </div>
    </section>
  );
};

export default Hero;
