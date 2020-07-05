const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get(`/`, (req, res) => {
  axios
    .get(
      `https://cors-anywhere.maps.googleapis.com/maps/api/place/findplacefromtext/input=subway?key=${process.env.REACT_APP_GOOGLE_KEY}`
    )
    .then((response) => {
      res.send(response.data);
    });
});

module.exports = router;
