import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavMenu.scss";
import Logo from "../../assets/Icons/logo.svg";
import styled from "styled-components";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="menu-dropdown">
      <section className="header__container">
        <div>
          <Link to="/home" key="home-link">
            <img className="logo" src={Logo} alt="logo" />
          </Link>
        </div>
      </section>

      <section className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
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
