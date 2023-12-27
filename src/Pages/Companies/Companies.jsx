import React from "react";
const Companies = () => {
  return (
    <>
      <div className="companycontainer">
        <div className="companychild1">
          <p>Trusted By 1000+ Companies</p> <br /> <br />
          <button className="logobtn">
            <i className="fa-solid fa-z fa-2xl"></i>
          </button>
          <h1>ZEINA</h1>
          <button className="logobtn" style={{ marginLeft: "4rem" }}>
            <i
              className="fa-solid fa-building fa-2xl"
              style={{ marginLeft: "0rem" }}
            ></i>
          </button>
          <h1>LOGIC+</h1>
          <button className="logobtn" style={{ marginLeft: "3rem" }}>
            <i
              className="fa-solid fa-chart-simple fa-2xl"
              style={{ paddingLeft: "0rem" }}
            ></i>
          </button>
          <h1>CHARTZ</h1>
          <button className="logobtn" style={{ marginLeft: "3rem" }}>
            <i
              className="fa-brands fa-amazon fa-2xl"
              style={{ paddingLeft: "0rem" }}
            ></i>
          </button>
          <h1>AMAZON</h1>
          <button className="logobtn" style={{ marginLeft: "3rem" }}>
            <i
              className="fa-brands fa-shopify fa-2xl"
              style={{ paddingLeft: "0rem" }}
            ></i>
          </button>
          <h1>SHOPIFY</h1>
        </div>
      </div>
    </>
  );
};

export default Companies;
