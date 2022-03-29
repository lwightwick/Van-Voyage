import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Icons/logo.svg";
import Hamburger from "../Hamburger/Hamburger";
import Menu from "../Menu/Menu";
import "./Nav.scss";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Link to="/home" key="home-link">
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <Hamburger className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu className="menu" isOpen={isOpen}>
        <Link className="menu__link" to="/van-details" key="van-details-link">
          Van Details
        </Link>

        <Link className="menu__link" to="/about" key="about-link">
          about
        </Link>

        <Link className="menu__link" to="/booking" key="booking-link">
          book my Trip
        </Link>

        <Link className="menu__link" to="/contact" key="contact-link">
          contact
        </Link>

        <Link className="menu__link" to="/places-to-go" key="places-to-go-link">
          Places to Go
        </Link>
      </Menu>
    </Nav>
  );
}

export default Nav;
