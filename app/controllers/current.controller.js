const axios = require('axios').default;
const querystring = require('querystring');
const apiKey = process.env.API_KEY;
const currentMongoService = require('../services/database/current.mongo.service');


async function getCurrent(req, res){
    const q = req.query.q;
    const axiosParams = querystring.stringify({appid: apiKey, q})    
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?${axiosParams}`)
        .then((response) => {
            const resData =  response.data;
            res.status(200).json(resData);
        })
        .catch(err => {
            res.status(400).json({
                code: 'bad_request',
                message: 'Bad request. Please check your parameters values'
            });
        });
};

async function postCurrent(req, res){
    res.json(await currentMongoService.saveCurrent());
};

     
  module.exports = {getCurrent, postCurrent};