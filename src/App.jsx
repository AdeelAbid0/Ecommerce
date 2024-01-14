import React from "react";
import Navbar from "./Pages/Navbar/Navbar";
import "./Pages/Navbar/Navbar.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import "./Pages/Footer/Footer.css";
import Cart from "./Pages/Cart/Cart";
import "./Pages/Cart/Cart.css";
import Singleproductpage from "./Pages/Singleproductpage/Singleproductpage";
import "./Pages/Singleproductpage/Singleproductpage.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/About" element={<About />}>
          About
        </Route>
        <Route path="/Products" element={<Products />}>
          Products
        </Route>
        <Route path="/Contact" element={<Contact />}>
          Contact
        </Route>
        <Route path="/Cart" element={<Cart />}>
          Cart
        </Route>
        <Route path="/Singleproductpage/:id" element={<Singleproductpage />}>
          Singleproductpage
        </Route>
        {/* <Route path="/Checkout" element={<Checkout />}>
          Checkout
        </Route> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
