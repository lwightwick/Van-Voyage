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

// const zoomElement = document.querySelector(".zoom");
// let zoom = 1;

// const ZOOM_SPEED = 0.05;

// document.addEventListener("wheel", function (e) {
//   if (e.deltaY > 0) {
//     zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
//   } else {
//     zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
//   }
// });

function HomeTheVan() {
  return (
    <section className="the-van">
      <h2 className="the-van__title">The Van</h2>
      <div className="the-van__link">
        <Link to="/van-details" onClick={goToTop} className="zoom">
          <img
            data-aos="zoom-in"
            className="the-van__image"
            src={VanFront}
            alt="van"
          />
        </Link>
        <Link to="/van-details" onClick={goToTop}>
          <Button text="Find Out More" />
        </Link>
      </div>
    </section>
  );
}

export default HomeTheVan;
