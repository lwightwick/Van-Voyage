const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;

//middleware
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// home route

// routing

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
