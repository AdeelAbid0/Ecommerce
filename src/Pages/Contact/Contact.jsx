import React, { useState } from "react";
import "../Contact/Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const showToast = () => {
    if (!name || !email || !message) {
      toast.error("Please fill in all the fields");
    } else if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
    } else {
      toast.success("Message submitted successfully");
    }
  };

  return (
    <>
      <div className="contactmain">
        <h1 className="h1"> Feel Free To Contact Us </h1>

        <div className="contactcontainer">
          <div className="contactchild1">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.43215936441425!2d73.37702703197156!3d33.593438000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfe378a9cb1439%3A0x5e443b530dd99862!2sGulzar-e-Madina%20Masjid!5e0!3m2!1sen!2s!4v1702380673702!5m2!1sen!2s"
              width="500"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: "0.1rem solid black" }}
            ></iframe>
          </div>
          <div className="contactchild2">
            <form className="form">
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <textarea
                cols="46"
                rows="5"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <br />
              <button className="btn" type="button" onClick={showToast}>
                Submit
              </button>
            </form>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default Contact;
