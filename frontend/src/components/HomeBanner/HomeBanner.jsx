import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import BannerImage from "../../assets/Images/van-mountains.png";
import "./HomeBanner.scss";

function Banner() {
  return (
    <div>
      <section className="banner">
        <img className="banner__image" src={BannerImage} alt="" />
        <h1 className="banner__title">Let's go Vanping!</h1>
        <Link className="banner__button" to="/booking">
          <Button text={"Book a Trip"} />
        </Link>
      </section>
    </div>
  );
}

export default Banner;
