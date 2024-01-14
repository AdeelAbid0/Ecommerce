import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [mobmenu, setmobmenu] = useState("");
  const items = useSelector((state) => state.cart);
  const closeMenu = () => {
    setmobmenu(false);
  };
  return (
    <>
      <div className="containerheader">
        <div className="cheaderchild1">
          <h1>Ecommerce</h1>
        </div>
        <div className={mobmenu ? "mobmenu" : "cheaderchild2"}>
          <div className="mobmenu">
            <ul>
              <NavLink to="/" onClick={closeMenu}>
                <li>
                  <i
                    className="fa-solid fa-house"
                    style={{ marginLeft: "3rem" }}
                  ></i>
                  <span className="list1">Home</span>
                </li>
              </NavLink>
              <hr />
              <NavLink to="/About" onClick={closeMenu}>
                <li>
                  <i
                    className="fa-solid fa-address-card "
                    style={{ marginLeft: "3rem" }}
                  ></i>
                  <span className="list2">About</span>
                </li>
              </NavLink>
              <hr />
              <NavLink to="/Products" onClick={closeMenu}>
                <li>
                  <i
                    className="fa-solid fa-id-badge"
                    style={{ marginLeft: "3rem" }}
                  ></i>
                  <span className="list3">Proucts</span>
                </li>
              </NavLink>
              <hr />
              <NavLink to="/Contact" onClick={closeMenu}>
                <li>
                  <i
                    className="fa-sharp fa-solid fa-display"
                    style={{ marginLeft: "3rem" }}
                  ></i>
                  <span className="list4">Contact</span>
                </li>
              </NavLink>
              <hr />
            </ul>
          </div>
        </div>
        <div className="cheaderchild3">
          <NavLink to="/Cart">
            <button style={{ fontSize: "1.2rem" }} className="cartbtn">
              <i
                className="fa-solid fa-cart-shopping fa-xl"
                style={{ color: "black" }}
              >
                <sup
                  style={{
                    paddingLeft: "0.4rem",
                    color: "red",
                  }}
                >
                  {items.length}
                </sup>
              </i>
            </button>
          </NavLink>
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setmobmenu(!mobmenu);
          }}
        >
          {mobmenu ? (
            <i className="fa-solid fa-times fa-xl"></i>
          ) : (
            <i className="fa-solid fa-bars fa-xl"></i>
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
