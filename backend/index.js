const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const reviewsData = require("./routes/reviews");
const bookingsData = require("./routes/bookings");
require("dotenv").config();
const { PORT } = process.env;

//middleware
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

// home route
app.get("/", (req, res) => {
  res.send("reviews");
  res.send("bookings");
});

// routing
app.use("/reviews", reviewsData);
app.use("/bookings", bookingsData);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
