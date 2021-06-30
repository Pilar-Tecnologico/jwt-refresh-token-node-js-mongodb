const axios = require('axios').default;
const querystring = require('querystring');

async function getSumary(req, res){
    const {country} = req.params
    try {
        const params = querystring.stringify({yesterday:"true", strict:"true"})
        const {data} = await axios.get(`https://corona.lmao.ninja/v2/countries/${country}?${params}&query`)
        res.status(200).json(data)
    }
    catch {
        const badResponse = {
            "code": "bad_request",
            "message": "Bad request. Please check your parameters values"
        }
        res.status(400).json(badResponse)
    }
};

module.exports = {getSumary};