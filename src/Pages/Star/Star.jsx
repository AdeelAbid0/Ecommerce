import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
const Star = ({ stars }) => {
  const ratingstar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <IoMdStar />
        ) : stars >= number ? (
          <IoIosStarHalf />
        ) : (
          <IoIosStarOutline />
        )}
      </span>
    );
  });
  return (
    <>
      <span style={{ display: "flex", color: "#F2B01E", fontSize: "1.4rem" }}>
        {ratingstar}
      </span>
      <span style={{ paddingLeft: "0.5rem", fontSize: "1.4rem" }}>{stars}</span>
    </>
  );
};

export default Star;
