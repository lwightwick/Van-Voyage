const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// GET all booking info
router.get("", (req, res) => {
  fs.readFile("./data/bookings.json", "utf8", (err, data) => {
    const bookingData = JSON.parse(data);
    res.json(bookingData);
  });
});

// CREATE new booking
router.post("/", (req, res) => {
  fs.readFile("./data/bookings.json", "utf8", (err, data) => {
    const bookingData = JSON.parse(data);
    const newBooking = {
      id: uuidv4(),
      departure: req.body.departure,
      return: req.body.return,
      timestamp: req.body.timestamp,
    };
    bookingData.push(newBooking);
    fs.writeFile("./data/bookings.json", JSON.stringify(bookingData), () => {
      res.json({ message: "data written to file", data: bookingData });
    });
  });
});

module.exports = router;
