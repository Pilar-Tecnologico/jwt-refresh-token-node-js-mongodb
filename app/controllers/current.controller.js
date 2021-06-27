// En curren uso la API del clima https://openweathermap.org/
// current en al clima actual, parametros la ciudad y la unidad de medida
//en forecast es el el clima extendido -parametros ciudad, unidad de medida y cantidad de dias

const axios = require('axios').default;
const querystring = require('querystring');
const apiKey = process.env.API_KEY;
//const currentMongoService = require('../services/database/current.mongo.service');
const db = require("../models");
const { current: Current } = db;

async function getCurrent(req, res){
    const q = req.query.q;
    const units = req.query.units;
    const axiosParams = querystring.stringify({appid: apiKey, q, units})    
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

/* async function saveCurrent(req, res){
    res.json(await currentMongoService.saveCurrent());
};

async function getForecast(req, res){
    const q = req.query.q;
    const units = req.query.units;
    const cnt = req.query.cnt; 
    const axiosParams = querystring.stringify({appid: apiKey, q, units, cnt});
    console.log('params',axiosParams);
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?${axiosParams}`)
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
};*/
     
  module.exports = {getCurrent};