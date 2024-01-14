import React, { useEffect, useState } from "react";
import { add } from "../../store/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
import { fetchproduct } from "../../store/Productslice";
import Formatprice from "../Formatprice/Formatprice";
import { Link, NavLink } from "react-router-dom";
import filter from "../../../public/filter.svg";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredcompany, setfilteredcompany] = useState([]);
  const [alphabetFilter, setAlphabetFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchproduct());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const filterProducts = (cat) => {
    const updatedProducts = products.filter(
      (product) => product.category === cat
    );
    setFilteredProducts(updatedProducts);
    setActiveCategory(cat);
  };

  const filtercompany = (cat) => {
    const updatecompany = products.filter((product) => product.company === cat);

    setfilteredcompany(updatecompany);
    setActiveCategory(cat);
  };

  const filterAlphabet = (letter) => {
    setAlphabetFilter(letter);
    const sortedProducts = [...products].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (letter === "a-z") {
        return nameA.localeCompare(nameB);
      } else if (letter === "z-a") {
        return nameB.localeCompare(nameA);
      }
      return 0;
    });
    setFilteredProducts(sortedProducts);
  };

  const filterPrice = (option) => {
    setPriceFilter(option);
    const sortedProducts = [...products].sort((a, b) => {
      if (option === "high-low") {
        return b.price - a.price;
      } else if (option === "low-high") {
        return a.price - b.price;
      }
      return 0;
    });
    setFilteredProducts(sortedProducts);
  };

  const resetFilter = () => {
    setFilteredProducts([]);
    setfilteredcompany([]);
    setAlphabetFilter("all");
    setPriceFilter("all");
    setActiveCategory("all");
  };

  return (
    <>
      {status === "loading" && (
        <section className="spinner">
          <div
            style={{ marginTop: "20rem", marginLeft: "50%", height: "60rem" }}
          >
            <span className="loader"></span>
          </div>
        </section>
      )}
      {status === "idle" && (
        <div className="productscontainer">
          <div className="productsfilter">
            <h1>Filters</h1>
            <div className="svg">
              <img
                src={filter}
                style={{
                  color: "white",
                  width: "2rem",
                  height: "2rem",
                  marginLeft: "15rem",
                }}
              />
            </div>
            <div className="categories">
              <h1>Categories</h1>
              <h3
                className={activeCategory === "all" ? "active" : ""}
                onClick={() => resetFilter()}
              >
                All
              </h3>
              <h3
                className={activeCategory === "mobile" ? "active" : ""}
                onClick={() => filterProducts("mobile")}
              >
                Mobiles
              </h3>
              <h3
                className={activeCategory === "laptop" ? "active" : ""}
                onClick={() => filterProducts("laptop")}
              >
                Laptops
              </h3>
              <h3
                className={activeCategory === "computer" ? "active" : ""}
                onClick={() => filterProducts("computer")}
              >
                Computers
              </h3>
              <h3
                className={activeCategory === "accessories" ? "active" : ""}
                onClick={() => filterProducts("accessories")}
              >
                Accessories
              </h3>
              <h3
                className={activeCategory === "watch" ? "active" : ""}
                onClick={() => filterProducts("watch")}
              >
                Watches
              </h3>
            </div>
            <div className="companies">
              <h1>Companies</h1>
              <select
                style={{
                  marginLeft: "2rem",
                  marginTop: "1rem",
                  width: "8rem",
                  height: "2rem",
                }}
                onChange={(e) => filtercompany(e.target.value)}
                value={
                  filteredcompany.length > 0
                    ? filteredcompany[0].company
                    : "all"
                }
              >
                <option value="all">All</option>
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
                <option value="dell">Dell</option>
                <option value="nokia">Nokia</option>
                <option value="asus">Asus</option>
                <option value="lenova">Lenova</option>
                <option value="rolex">Rolex</option>
              </select>
            </div>
            <div className="charactersort">
              <h1>Sorting</h1>
              <select
                style={{
                  marginLeft: "2rem",
                  marginTop: "1rem",
                  width: "8rem",
                  height: "2rem",
                }}
                onChange={(e) => filterAlphabet(e.target.value)}
                value={alphabetFilter}
              >
                <option value="all">All</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
            </div>
            <div className="charactersort">
              <h1>Price</h1>
              <select
                style={{
                  marginLeft: "2rem",
                  marginTop: "1rem",
                  width: "8rem",
                  height: "2rem",
                }}
                onChange={(e) => filterPrice(e.target.value)}
                value={priceFilter}
              >
                <option value="all">All</option>
                <option value="high-low">High to Low</option>
                <option value="low-high">Low to High</option>
              </select>
            </div>
            <button className="resetfilter" onClick={() => resetFilter()}>
              Reset Filters
            </button>
          </div>
          <div className="products">
            <div className="productsnav">
              <p className="p">
                Total Items =<span> </span>
                {filteredProducts.length > 0
                  ? filteredProducts.length
                  : filteredcompany.length > 0
                  ? filteredcompany.length
                  : products.length}
              </p>
            </div>

            <div className="productsshow">
              {(filteredcompany.length > 0
                ? filteredcompany
                : filteredProducts.length > 0
                ? filteredProducts
                : products
              ).map((product) => (
                <section
                  style={{
                    border: "  0.1rem solid rgba(128, 128, 128, 0.432)",
                    backgroundColor: "#f1efef",
                    borderRadius: "2rem",
                  }}
                  className="text-gray-600 body-font relative"
                  key={product.id}
                >
                  <div className="container px-5 py-5 mx-auto   ">
                    <div className="flex flex-wrap -m-6 ">
                      <a className="block relative h-40 w-60 rounded overflow-hidden ml-3">
                        <img
                          style={{
                            border: "0.1rem solid rgba(128, 128, 128, 0.432)",
                          }}
                          alt="ecommerce"
                          className=" object-center w-100 h-100 block relative hover:scale-110 transition-transform duration-300 ease-out"
                          src={product.image}
                        />
                      </a>
                      <div className="mt-4 -ml-1.5">
                        <div>
                          <h3
                            style={{
                              marginTop: "-11rem",
                              fontSize: "1.2rem",
                              height: "2.5rem",
                              fontWeight: "bold",
                              paddingRight: "0rem",
                              position: "relative",
                              color: "white",
                              width: "8rem",
                              backgroundColor: "black",
                              textAlign: "center",
                              paddingTop: "0.5rem",
                              borderTopLeftRadius: "0.5rem",
                              borderBottomLeftRadius: "0.5rem",
                              opacity: "0.8",
                            }}
                            className=" text-lg tracking-widest title-font mb-1 capitalize ml-32"
                          >
                            {product.category}
                          </h3>
                        </div>
                        <h3
                          style={{
                            color: "black",
                            marginLeft: "1.5rem",
                            marginTop: "7.5rem",
                            fontSize: "1.4rem",
                          }}
                          className="text-gray-900 title-font text-xl  font-bold capitalize ml-32"
                        >
                          {product.name}
                        </h3>
                        <div
                          style={{
                            marginTop: "-2rem",
                            marginLeft: "12rem",
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
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        color: "blue",
                        textAlign: "center",
                      }}
                    >
                      <NavLink to={`/Singleproductpage/${product.id}`}>
                        <button
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            width: "7.5rem",
                            height: "2.6rem",
                            borderRadius: "0.5rem",
                          }}
                        >
                          <span
                            className="fa-solid fa-arrow-right"
                            style={{
                              color: "white",
                              marginLeft: "-0.5rem",
                              fontSize: "1.2rem",
                            }}
                          ></span>
                          <span
                            style={{
                              marginLeft: "0.5rem",
                              fontStyle: "normal",
                              color: "white",
                              letterSpacing: "0.1rem",
                              fontSize: "1.2rem",
                              height: "2.5rem",
                            }}
                          >
                            Details
                          </span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
