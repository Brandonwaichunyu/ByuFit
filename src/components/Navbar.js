//Notes: <ul className={click ? "nav-menu active" : "nav-menu"}> gets it from the css whenever click (boolean)
// menu items display none on css when less than 960

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); //handleClick will switch false/true whenever a user click. Therefore whenever a user onClick, it will switch the icon with if/else

  const [button, setButton] = useState(true); //setting the button to true for it to hide/show whenever we playing with rez

  const closeMobileMenu = () => setClick(false); //set to false whenever a user clicks on an element, so it will close the menu

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }; //hide 'sign up' button if window is less than 960

  useEffect(() => {
    showButton();
  }, []); //everytime we refresh, the sign up button will stop showing up. It will render one time and then it wont show up anymore

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            BYU <i className="fas fa-dumbbell"></i> FIT
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/classes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Classes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact Us</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
