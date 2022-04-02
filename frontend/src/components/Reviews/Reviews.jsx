import React from "react";
import ReviewsData from "../../data/reviews.json";
import "./Reviews.scss";

function Reviews() {
  return (
    <div className="reviews">
      <h2>reviews</h2>
      <div className="reviews__container">
        <div className="reviews__card">
          {ReviewsData.map((item, index) => (
            <div className="reviews__" key={index}>
              <p className="reviews__text">{item.review}</p>
              <img
                className="reviews__image"
                src={item.image}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
