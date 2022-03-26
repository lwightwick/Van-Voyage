const express = require("express");
const router = express.Router();
const fs = require("fs");

// GET all booking info
router.get("", (req, res) => {
  fs.readFile("./data/bookings.json", "utf8", (err, data) => {
    const bookingData = JSON.parse(data);
    res.json(bookingData);
  });
});

module.exports = router;
