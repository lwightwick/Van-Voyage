import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ReviewsData from "../../data/reviews.json";
import "./Reviews.scss";
import axios from "axios";

function Reviews() {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    getReviewsData();
  }, []);

  const getReviewsData = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/reviews`).then((response) => {
      setReviewsData(response.data);
      return response.data[0].id;
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="reviews">
      <h2 className="reviews__title">reviews</h2>
      <div className="slider-wrapper">
        <Slider {...settings}>
          {reviewsData.map((item, index) => (
            <div className="slick-slide" key={index}>
              <p className="slick-slide__text">{item.review}</p>
              <img
                className="slick-slide__image"
                src={item.image}
                alt={item.title}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Reviews;
