import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchfeaturedproduct } from "../../store/Featuredslice";
import Formatprice from "../Formatprice/Formatprice";
import { Link, NavLink } from "react-router-dom";
const Featuredsection = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.featured);
  useEffect(() => {
    dispatch(fetchfeaturedproduct());
  }, []);

  return (
    <>
      <section className="featured">
        <div
          style={{
            paddingLeft: "18rem",
            marginTop: "6rem",
            height: "8rem",
            paddingTop: "5rem",
            backgroundColor: "#f0e8e8",
          }}
        >
          <label style={{ fontSize: "1.4rem", marginTop: "1rem" }}>
            CHECK NOW !
          </label>
          <h1
            style={{ fontSize: "2rem", fontWeight: "bold", paddingTop: "1rem" }}
          >
            Our Feature Services
          </h1>
        </div>
      </section>
      <div className="featuredproducts">
        {products.map((product) => (
          <section className="text-gray-600 body-font  " key={product.id}>
            <div className="container px-5 py-5 mx-auto border-1 shadow-lg border-white rounded-3xl my-32">
              <div className="flex flex-wrap -m-4">
                <a className="block relative h-80 rounded overflow-hidden">
                  <img
                    style={{ border: "0.1rem solid white" }}
                    alt="ecommerce"
                    className=" object-center w-100 h-100 block relative hover:scale-110 transition-transform duration-300 ease-out"
                    src={product.image}
                  />
                </a>
                <div className="mt-4 ml-3">
                  <div>
                    <h3
                      style={{
                        marginTop: "-21rem",
                        fontSize: "1.4rem",
                        paddingRight: "1rem",
                        position: "relative",
                        color: "white",
                        width: "10rem",
                        height: "3.5rem",
                        backgroundColor: "black",
                        paddingLeft: "1rem",
                        paddingTop: "1rem",
                        borderTopLeftRadius: "1rem",
                        borderBottomLeftRadius: "1rem",
                        fontWeight: "bold",
                        opacity: "0.7",
                      }}
                      className=" text-lg tracking-widest title-font mb-1 capitalize ml-60"
                    >
                      {product.category}
                    </h3>
                  </div>
                  <h3
                    style={{
                      color: "black",
                      marginLeft: "0rem",
                      marginTop: "17rem",
                      fontSize: "1.4rem",
                    }}
                    className="text-gray-900 title-font text-xl  font-bold capitalize ml-32"
                  >
                    {product.name}
                  </h3>
                  <div
                    style={{
                      marginTop: "-2rem",
                      marginLeft: "20rem",
                      fontSize: "1.2rem",
                      color: "black",
                    }}
                  >
                    <p className="mt-1 font-medium text-xl">
                      <Formatprice price={product.price} />
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                  color: "blue",
                  textAlign: "center",
                }}
              >
                <NavLink to={`/Singleproductpage/${product.id}`}>
                  <button
                    style={{
                      backgroundColor: "black",
                      width: "8rem",
                      height: "3.5rem",
                      borderRadius: "0.5rem",
                      opacity: "0.7",
                    }}
                  >
                    <Link
                      className="fa-solid fa-arrow-right"
                      style={{ color: "white", fontSize: "1.2rem" }}
                    ></Link>
                    <button
                      style={{
                        marginLeft: "0.15rem",
                        fontStyle: "normal",
                        color: "white",
                        fontSize: "1.3rem",
                        letterSpacing: "0.1rem",
                      }}
                    >
                      Details
                    </button>
                  </button>
                </NavLink>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Featuredsection;
