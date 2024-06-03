import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="inputs">
        <h1>Contact Us</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Message" className="message" />
        <button>Send</button>
      </div>
    </div>
  );
};
export default Contact;
