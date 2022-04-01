import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import BannerImage from "../../assets/Images/van-mountains.png";
import "./HomePlacesToGo.scss";

function HomePlacesToGo() {
  return (
    <div>
      <section className="places_to_go">
        <h2>Places To Go</h2>
        <div className="places_to_go__list-container">
          <ul className="places_to_go__list">
            <li>
              <img src={Image} alt="" />
              <Link to="/places-to-go">
                <Button text={"Find Out More"} />
              </Link>
            </li>
            <li>
              <img src={Image} alt="" />
              <Link to="/places-to-go">
                <Button text={"Find Out More"} />
              </Link>
            </li>
            <li>
              <img src={Image} alt="" />
              <Link to="/places-to-go">
                <Button text={"Find Out More"} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HomePlacesToGo;
