import React from "react";
// import HomeSection from "./HomeSection";
import "./HomeSection.css";

function ContactCards() {
  return (
    <div>
      <h1 className="contact">Contact Us</h1>
      <h1 className="title-container">Come Train With Us!</h1>

      <div className="contentwrapper text-center">
        <p>Phone Number: (555)-413-9090</p>
        <p>Location: Montreal QC, H3G 5C3</p>
        <p>Hours of Operation: Mon-Sun: 10AM to 10PM</p>
      </div>
    </div>
  );
}

export default ContactCards;
