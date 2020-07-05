const axios = require("axios");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get(`/`, (req, res) => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${process.env.REACT_APP_GOOGLE_KEY}&query=restaurants-in-fargo`
    )
    .then((response) => {
      res.send(response.data);
      console.log(response.data);
    });
});

module.exports = router;
