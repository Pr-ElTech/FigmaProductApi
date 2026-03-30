import React from "react";
import { CiLocationOn } from "react-icons/ci";

const FooterCard = ({ texts }) => {
  return (
    <article>
      <h3>{texts.Title}</h3>
      <p>{texts.Text1}</p>
      <p>{texts.Text2}</p>
      <p>{texts.Text3}</p>
      <p>{texts.Text4}</p>
      {/* <p>
        <CiLocationOn /> <span>{texts.Location}</span>
      </p> */}
    </article>
  );
};

export default FooterCard;
