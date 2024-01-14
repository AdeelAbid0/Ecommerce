import React from "react";

const Deliveries = () => {
  return (
    <>
      <div className="deliverycontainer">
        <div className="deliverychild1">
          <section>
            <button className="logobtn" style={{ marginTop: "6rem" }}>
              <i
                style={{ color: "black" }}
                className="fa-solid fa-truck fa-xl"
              ></i>
            </button>
            <br />
            <p>Super Fast and Free Delivery</p>
          </section>
        </div>
        <div className="deliverychild2">
          <section>
            <button className="logobtn" style={{ marginTop: "1rem" }}>
              <i
                style={{ color: "black", marginTop: "1rem" }}
                className="fa-solid fa-shield-halved fa-2xl"
              ></i>
            </button>

            <br />
            <p>Non-contact Shipping</p>
          </section>
        </div>
        <div
          className="deliverychild3"
          style={{ marginTop: "1rem", paddingTop: "1rem" }}
        >
          <section>
            <button className="logobtn">
              <i
                style={{ color: "black" }}
                className="fa-solid fa-money-check fa-xl "
              ></i>
            </button>
            <br />
            <p>Money-back Guarantee</p>
          </section>
        </div>
        <div className="deliverychild4">
          <section>
            <button
              className="logobtn"
              style={{ marginTop: "6rem", marginLeft: "10rem" }}
            >
              <i
                style={{ color: "black" }}
                className="fa-regular fa-credit-card fa-2xl"
              ></i>
            </button>
            <br />
            <p>Super Secure Payment System</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Deliveries;
