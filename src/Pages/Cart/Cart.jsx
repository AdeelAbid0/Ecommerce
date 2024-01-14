import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, updateQuantity } from "../../store/Cartslice";
import Formatprice from "../Formatprice/Formatprice";
import { Link, NavLink } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productid) => {
    dispatch(remove(productid));
  };

  const increment = (productid) => {
    dispatch(updateQuantity({ productid, quantity: 1 }));
  };

  const decrement = (productid, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ productid, quantity: -1 }));
    }
  };

  const calculateTotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };
  return (
    <section className="cartsection">
      <table>
        <thead
          style={{
            borderTop: "0.1rem solid red",
            borderBottom: "0.1rem solid red",
          }}
        >
          <tr>
            <th>Products</th>
            <th>Name</th>
            <th>Quant</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <td colSpan="5" style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "3rem",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  Cart is empty
                </p>
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id} style={{ backgroundColor: "#f5f5f5" }}>
                <td style={{ display: "flex" }}>
                  <img
                    className="img block relative hover:scale-110 transition-transform duration-300 ease-out"
                    src={product.image[0].url}
                    alt="productimage"
                    style={{
                      width: "10rem",
                    }}
                  />
                  <h1
                    className="heading"
                    style={{
                      fontSize: "1.6rem",
                      padding: "3rem 0rem 0rem 1rem",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    {product.category}
                  </h1>
                </td>
                <td>{product.name}</td>
                <td>
                  <div className="incdecbtn">
                    <button
                      onClick={() => decrement(product.id, product.quantity)}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button onClick={() => increment(product.id)}> +</button>
                  </div>
                </td>
                <td>
                  {<Formatprice price={product.price * product.quantity} />}
                </td>
                <td>
                  <button onClick={() => handleRemove(product.id)}>
                    <i
                      className="fa-solid fa-trash fa-xl "
                      style={{ color: "red" }}
                    ></i>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {products.length > 0 && (
        <Link className="continue" to={"/Products"}>
          <Link
            style={{ fontSize: "1.8rem", color: "red" }}
            className="fa-solid fa-arrow-right"
          ></Link>
          <span
            className="span"
            style={{
              marginLeft: "0.5rem",
              fontSize: "1.8rem",
              fontStyle: "normal",
              fontWeight: "bold",
              color: "red",
            }}
          >
            Go Back
          </span>
        </Link>
      )}

      {products.length > 0 && (
        <button className="totalprice">
          Total: <Formatprice price={calculateTotal()} />
        </button>
      )}
      {/* {products.length > 0 && (
        <NavLink to={"/Checkout"} >
          <button className="checkout">CheckOut</button>
        </NavLink>
      )} */}
    </section>
  );
};

export default Cart;
