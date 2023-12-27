import React from "react";
import "../Contact/Contact.css";
const Contact = () => {
  return (
    <>
      <h1 className="h1"> Feel Free To Contact Us </h1>

      <div className="contactcontainer">
        <div className="contactchild1">
          <iframe
            className="contact"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.43215936441425!2d73.37702703197156!3d33.593438000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfe378a9cb1439%3A0x5e443b530dd99862!2sGulzar-e-Madina%20Masjid!5e0!3m2!1sen!2s!4v1702380673702!5m2!1sen!2s"
            width="600"
            style={{
              border: "0.2rem solid rgb(243, 235, 235)",
              borderRadius: "1rem",
              marginLeft: "5rem",
            }}
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contactchild2">
          <form action="submit" className="form">
            <input type="text" placeholder="Enter Your Name " />
            <input type="email" placeholder="Enter Your Email " /> <br />
            <textarea cols="46" rows="5" placeholder="Message "></textarea>{" "}
            <br />
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
