const axios = require("axios").default;

async function getResponse(req, res) {
  const valueResponse = req.query.value;
  const axiosParams = `https://http.cat/${valueResponse}`;
  axios
    .get(axiosParams)
    .then((response) => {
      res.status(response.status).json(response.data);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
}

module.exports = { getResponse };
