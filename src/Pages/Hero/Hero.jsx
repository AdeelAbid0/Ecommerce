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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            nihil maiores deleniti a, maxime labore ducimus ipsa modi soluta
            dolor commodi pariatur perferendis eligendi repudiandae ea quam quas
            ut itaque!
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
