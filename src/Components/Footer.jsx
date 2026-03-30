import React from "react";
import footerimg from "../assets/footer1.png";
import FooterCard from "./FooterCard";
import "../CSS/Footer.css";
const Footer = () => {
  const links = [
    {
      id: 0,
      Title: "Quick Links",
      Text1: "Home",
      Text2: "Stores",
      Text3: "Register your store",
    },
    {
      id: 1,
      Title: "Information",
      Text1: "About Us",
      Text2: "Private Policy",
      Text3: "Refund Policy",
      Text4: "Contact Us",
    },
    {
      id: 2,
      Title: "Where we operate",
      Location: "Lagos, Nigeria",
    },
  ];

  return (
    <footer>
      <div>
        <img src={footerimg} alt="" />
      </div>
      {links.map((item) => (
        <FooterCard key={item.id} texts={item} />
      ))}
    </footer>
  );
};

export default Footer;
