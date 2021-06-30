const axios = require('axios').default;
const querystring = require('querystring');

async function getVaccinesSumary(req, res){
    try {
        const params = querystring.stringify({comprimido: 1})
        const {data} = await axios.get(`https://covidstats.com.ar/ws/vacunadosargentina?${params}`)
        res.status(200).json(data)
    }
    catch {
        const badResponse = {
            "code": "internal_server_error",
            "message": "Something went wrong"
        }
        res.status(500).json(badResponse)
    }
};

module.exports = {getVaccinesSumary};