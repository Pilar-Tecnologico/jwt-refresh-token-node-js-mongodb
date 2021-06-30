const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiMovies.controller");

router.get("/:title", async (req, res) => {
  apiController.getMovieData(req, res);
});

module.exports = router;
