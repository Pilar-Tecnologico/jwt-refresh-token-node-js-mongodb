const axios = require("axios").default;
const bd = require("../services/database/api.mongo.service");
const apiKey = process.env.API_KEY_VERIFIER;

async function verifyDomain(req, res) {
  const email = req.body.emailToVerify;
  const name = req.body.name;
  const axiosParams = `https://verifier.meetchopra.com/verify/${email}?token=${apiKey}`;
  await axios
    .get(axiosParams)
    .then((response) => {
      const status = response.data.status;

      status
        ? (res.status(response.status).json({ status: "Verified" }),
          bd.saveVerifiedData(email, name))
        : res.status(response.status).json(response.data.error);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
}

module.exports = { verifyDomain };
