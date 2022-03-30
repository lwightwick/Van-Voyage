import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavMenu.scss";
import Logo from "../../assets/Icons/logo.svg";
import styled from "styled-components";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const [style, setStyle] = useState("hamburger-rotate");
  // const hamburgerRotate = () => {
  //   setStyle("hamburger__rotate");

  return (
    <main className="header__container">
      <Link className="logo" to="/home" key="home-link">
        <img src={Logo} alt="logo" />
      </Link>

      <section className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="hamburger hamburger__line-1" />
        <span className="hamburger hamburger__line-2" />
        <span className="hamburger hamburger__line-3" />
      </section>

      <section
        className="menu"
        style={{ "max-height": isOpen ? "300px" : "0" }}
      >
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
      </section>
    </main>
  );
};

export default NavMenu;

// const Hamburger = styled.div``;
