import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { add } from "../../store/Cartslice";
import { useDispatch } from "react-redux";
import Formatprice from "../Formatprice/Formatprice";
import Star from "../Star/Star";

const Singleproductpage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedcolor, setselectedcolor] = useState(null);
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await fetch(
          `https://api.pujakaitem.com/api/products/${id}`
        );
        const data = await res.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return (
      <div
        style={{ marginTop: "30rem", height: "60rem" }}
        className="text-center "
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const handleselectedcolor = (color) => {
    setselectedcolor(color);
  };

  return (
    <section className="singlepage text-gray-600 body-font overflow-hidden">
      <div className=" container px-5 py-24 mx-auto">
        <div className=" inner lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded hover:scale-90 transition-transform duration-300 ease-in cursor-pointer"
            src={product.image[0].url}
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-2xl title-font text-black  tracking-widest capitalize">
              {product.category}
            </h2>
            <h1 className="text-black text-3xl title-font font-medium mb-1 capitalize">
              {product.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center text-black">
                <Star stars={product.stars} />
                <span className="text-black text-xl ml-3">
                  ({product.reviews} Customer Reviews)
                </span>
              </span>
            </div>
            <p className="leading-relaxed text-2xl mr-28 text-black">
              {product.description}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3 text-black text-xl">Color</span>
                {product.colors.map((curcolor, index) => (
                  <div
                    onClick={() => handleselectedcolor(curcolor)}
                    key={index}
                    style={{
                      backgroundColor: curcolor,
                      width: "1.5rem",
                      height: "1.5rem",
                      marginRight: "0.5rem",
                      borderRadius: "50%",
                      border: "1px solid #ddd",
                      cursor: "pointer",
                      boxShadow:
                        selectedcolor === curcolor ? "0 0 1rem #000" : "none",
                    }}
                  ></div>
                ))}
              </div>
              <div className="flex ml-6 items-center"></div>
            </div>
            <div className="flex">
              <span className="title-font mt-3 ml-4 font-medium text-2xl text-black">
                MRP:
                <del>
                  <Formatprice price={product.price + 250000} />
                </del>
                <br />
                <Formatprice price={product.price} />
              </span>
              <NavLink to="/Products">
                <button className="flex ml-40 h-16 text-2xl font-bold text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Go Back
                </button>
              </NavLink>
              <button
                style={{ width: "12rem", height: "4rem" }}
                className="flex ml-4 text-white text-2xl font-bold  bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                onClick={() => handleAdd(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Singleproductpage;
