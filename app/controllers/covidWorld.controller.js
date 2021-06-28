const axios = require('axios').default;
const covidWorldMongoService = require('../services/database/covidWorld.mongo.service')

async function getSumary(req, res){
    try {
        const {data: {Global}} = await axios.get(`https://api.covid19api.com/summary`)

        covidWorldMongoService.saveCovidWorldCache(Global)

        res.status(200).json(Global)
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