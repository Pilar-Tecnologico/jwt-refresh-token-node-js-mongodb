const axios = require('axios').default;
const covidWorldMongoService = require('../services/database/covidWorld.mongo.service')

async function getSumary(req, res){
    try {
        const {data} = await axios.get(`https://corona.lmao.ninja/v2/all`)
        await covidWorldMongoService.saveCovidWorldCache(data)
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

module.exports = {getSumary};