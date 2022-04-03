const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// GET all review info
router.get("", (req, res) => {
  fs.readFile("./data/reviews.json", "utf8", (err, data) => {
    const reviewsData = JSON.parse(data);
    res.json(reviewsData);
  });
});

// CREATE new review
router.post("/", (req, res) => {
  fs.readFile("./data/reviews.json", "utf8", (err, data) => {
    const reviewsData = JSON.parse(data);
    const newReview = {
      id: uuidv4(),
      name: req.body.name,
      image: req.body.image,
      imageTitle: req.body.imageTitle,
      review: req.body.review,
      timestamp: req.body.timestamp,
    };
  });
});

module.exports = router;
