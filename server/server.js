const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const restaurants = require("./routes/restaurant.router.js");
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // needed for post/put requests
app.use(express.static("build"));

/** ---------- EXPRESS ROUTES ---------- **/
app.use("/restaurants", restaurants);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
