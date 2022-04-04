import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import SunshineCost from "../../assets/Images/sunshine-coast.jpg";
import Lillooet from "../../assets/Images/lillooet.jpg";
import Pender from "../../assets/Images/pender.jpg";
import "./HomePlacesToGo.scss";

function HomePlacesToGo() {
  return (
    <div>
      <section className="places_to_go">
        <h2>Places To Go</h2>
        <div className="places_to_go__container">
          <div className="places_to_go__card">
            <h2 className="places_to_go__subtitle">Sunshine Coast</h2>
            <img
              className="places_to_go__image"
              src={SunshineCost}
              alt="sunshine coast"
            />
            <Link to="/places-to-go">
              <Button text={"Find Out More"} />
            </Link>
          </div>
          <div className="places_to_go__card">
            <h2 className="places_to_go__subtitle">Pender Island</h2>
            <img
              className="places_to_go__image"
              src={Pender}
              alt="pender island"
            />
            <Link to="/places-to-go">
              <Button text={"Find Out More"} />
            </Link>
          </div>
          <div className="places_to_go__card">
            <h2 className="places_to_go__subtitle">Lillooet</h2>
            <img
              className="places_to_go__image"
              src={Lillooet}
              alt="Lillooet"
            />
            <Link to="/places-to-go">
              <Button text={"Find Out More"} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePlacesToGo;
