import React, { useState } from "react";
import BehindTheScenesData from "../../data/BehindTheScenesData.json";
import "./BehindScenesImageGallery.scss";
import ImageModal from "../ImageModal/ImageModal";

function BehindScenesImageGallery() {
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImage(item.image);
  };

  const handleRightClick = () => {
    const totalLength = BehindTheScenesData.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newImage = BehindTheScenesData.data[0].image;
      setClickedImage(newImage);
      return;
    }
    const newIndex = currentIndex + 1;
    const newImage = BehindTheScenesData.data.filter((item) => {
      return BehindTheScenesData.data.indexOf(item) === newIndex;
    });
    const newItem = newImage[0].image;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  const handleLeftClick = () => {
    const totalLength = BehindTheScenesData.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newImage = BehindTheScenesData.data[totalLength - 1].image;
      setClickedImage(newImage);
      return;
    }
    const newIndex = currentIndex - 1;
    const newImage = BehindTheScenesData.data.filter((item) => {
      return BehindTheScenesData.data.indexOf(item) === newIndex;
    });
    const newItem = newImage[0].image;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="behind-the-scenes">
      <h2 className="behind-the-scenes__subtitle">behind the scenes</h2>
      <div className="image-gallery">
        {BehindTheScenesData.data.map((item, index) => (
          <div className="image-gallery__images" key={index}>
            <img
              src={item.image}
              alt={item.title}
              onClick={() => handleClick(item, index)}
            />
          </div>
        ))}

        <div>
          {clickedImage && (
            <ImageModal
              clickedImage={clickedImage}
              handleRightClick={handleRightClick}
              setClickedImage={setClickedImage}
              handleLeftClick={handleLeftClick}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default BehindScenesImageGallery;
