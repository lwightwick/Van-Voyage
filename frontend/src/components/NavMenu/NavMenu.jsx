import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavMenu.scss";
import Logo from "../../assets/Icons/logo.svg";
import styled from "styled-components";

const goToTop = () => {
  window.scrollTo({
    top: 10,
    behavior: "smooth",
  });
};

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="header__container">
      <Link className="logo" to="/home" key="home-link" onClick={goToTop}>
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
        <NavLink
          activeClassName="clicked"
          className="menu__link"
          to="/van-details"
          onClick={goToTop}
          key="van-details-link"
        >
          the van
        </NavLink>

        <NavLink
          activeClassName="clicked"
          className="menu__link"
          to="/booking"
          onClick={goToTop}
          key="booking-link"
        >
          book my Trip
        </NavLink>

        <NavLink
          activeClassName="clicked"
          className="menu__link"
          to="/places-to-go"
          onClick={goToTop}
          key="places-to-go-link"
        >
          Places to Go
        </NavLink>

        <NavLink
          activeClassName="clicked"
          className="menu__link"
          to="/about"
          onClick={goToTop}
          key="about-link"
        >
          about
        </NavLink>

        <NavLink
          activeClassName="clicked"
          className="menu__link"
          to="/contact"
          onClick={goToTop}
          key="contact-link"
        >
          contact
        </NavLink>
      </section>
    </section>
  );
};

export default NavMenu;

// const Hamburger = styled.div``;
