import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import VanFront from "../../assets/Images/van-front.png";
import "./HomeTheVan.scss";

const goToTop = () => {
  window.scrollTo({
    top: 10,
    behavior: "smooth",
  });
};

function HomeTheVan() {
  return (
    <section className="the-van">
      <div className="the-van__titles-container">
        <h2 className="the-van__title">The Van</h2>
        <h2 className="the-van__subtitle">(Brandi)</h2>
      </div>
      <div className="the-van__link-container">
        <Link
          to="/van-details"
          onClick={goToTop}
          className="the-van__image-link"
        >
          <img className="the-van__image" src={VanFront} alt="van" />
        </Link>
        <Link to="/van-details" onClick={goToTop}>
          <Button text="Find Out More" />
        </Link>
      </div>
    </section>
  );
}

export default HomeTheVan;
