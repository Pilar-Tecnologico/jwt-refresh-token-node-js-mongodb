const axios = require('axios').default;

async function getSumary(req, res){
    try {
        const {data} = await axios.get(`https://covidstats.com.ar/ws/evolucion?comprimido=1&origen=`)

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