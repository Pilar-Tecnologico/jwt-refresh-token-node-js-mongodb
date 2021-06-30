const axios = require("axios").default;
const apiKey = process.env.API_KEY_MOVIES;

async function getMovieData(req, res) {
  const titleMovie = req.params.title;
  const axiosParams = `http://www.omdbapi.com/?t=${titleMovie}&apikey=${apiKey}`;
  await axios
    .get(axiosParams)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
}

module.exports = { getMovieData };
