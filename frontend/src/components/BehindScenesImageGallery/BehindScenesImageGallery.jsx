import React from "react";
import BehindTheScenesData from "../../data/BehindTheScenesData.json";
import "./BehindScenesImageGallery.scss";

function BehindScenesImageGallery() {
  return (
    <section className="behind-the-scenes">
      <h2 className="behind-the-scenes__subtitle">brandi's creation</h2>
      <div className="behind-the-scenes__card">
        <div className="image-gallery__container">
          <div className="image-gallery">
            {BehindTheScenesData.data.map((item, index) => (
              <div className="image-gallery__images" key={index}>
                <img
                  className="image-gallery__image"
                  src={item.image}
                  alt={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BehindScenesImageGallery;
