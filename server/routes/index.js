const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get("/movies", (req, res) => {
  console.log("called");
  Movies.find().then((movies) => {
    console.log(movies);
    res.json({ movies });
  });
});

//get movie details
router.get("/movies/:id", (req, res) => {
  console.log(req.params.id);
  Movies.findById(req.params.id).then((movie) => {
    res.json({ movie });
  });
});
module.exports = router;
