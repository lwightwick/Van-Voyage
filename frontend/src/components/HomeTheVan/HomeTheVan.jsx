import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import VanFront from "../../assets/Images/van-front.png";
import "./HomeTheVan.scss";

function HomeSection2() {
  return (
    <div>
      <section className="the-van">
        <h2 className="the-van__title">The Van</h2>
        <img className="image__van-front" src={VanFront} alt="" />
        <Link to="/van-details">
          <Button text="Find Out More" />
        </Link>
      </section>
    </div>
  );
}

export default HomeSection2;
