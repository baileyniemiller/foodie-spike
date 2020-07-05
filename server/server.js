const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const restaurants = require("./routes/restaurant.router.js");


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // needed for post/put requests
app.use(express.static("build"));

/** ---------- EXPRESS ROUTES ---------- **/
app.use("/restaurants", restaurants);


// App set
const PORT = process.env.PORT || 5000;

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
