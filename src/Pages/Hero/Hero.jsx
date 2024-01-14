import React from "react";
import { NavLink } from "react-router-dom";
const Hero = (props) => {
  return (
    <>
      <div className="herocontainer">
        <div className="herochild1">
          <label>WELCOME TO </label>
          <h1>{props.title}</h1>
          <p>
            Welcome to our online Store! Explore a curated selection of
            cutting-edge laptops, stylish watches, trendy accessories, and
            powerful computers. Elevate your shopping experience with quality
            and style at your fingertips.
          </p>
          <NavLink to="/Products">
            <button className="btn">Shop Now</button>
          </NavLink>
        </div>
        <div className="herochild2">
          <img src="/heroimage.jpg" alt="heroimage" />
        </div>
      </div>
    </>
  );
};

export default Hero;
