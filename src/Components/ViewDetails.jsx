import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import "../CSS/ViewDetails.css";
import { useParams } from "react-router-dom";
import { use } from "react";
useParams;
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { BounceLoader } from "react-spinners";

const ViewDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setloading] = useState(true);
  const baseUrl = `https://api.escuelajs.co/api/v1/products/13`;

  const productData = async () => {
    try {
      const resc = await axios.get(baseUrl);
      setProduct(resc.data);
      console.log("PRODUCT DATA", resc.data);
      setloading(false);
    } catch (error) {
      console.log("ERROR FETCHING DATA", error.message);
    }
  };

  useEffect(() => {
    productData();
  }, []);
  return (
    <div className="productDetailCtn">
      <Header />
      <h1>View Details</h1>
      {loading ? (
        <BounceLoader color="#55cc5d" />
      ) : (
        <article className="detail-Ctn">
          <div className="image-Ctn">
            <img src={product?.images?.[0]} alt="" />
            <div>
              <CiSquarePlus /> <CiSquareMinus />
            </div>
            <div>
              <AiOutlineLike />
              <AiOutlineDislike />
            </div>
          </div>
          <div className="details">
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <p>${product?.price?.toFixed(2)}</p>
          </div>
        </article>
      )}
    </div>
  );
};

export default ViewDetails;
