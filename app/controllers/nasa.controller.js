const axios = require('axios').default;
const querystring = require('querystring');
const apiKey = process.env.API_KEY;
const apodMongoService = require('../../services/database/apod.mongo.service');



async function getPictureOfTheDay(req, res){
    const query = {
        date: req.query.date,
        start_date: req.query.start_date,
        end_date: req.query.end_date
    };
    const axiosParams = querystring.stringify({api_key: apiKey, ...query})
    console.log(axiosParams);
    axios.get(`https://api.nasa.gov/planetary/apod?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

async function getMarsPicture(req, res){
    const query = {
        earth_date: req.query.earth_date
    };
    const axiosParams = querystring.stringify({api_key: apiKey, ...query});
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

async function saveSendMongodb(req, res){
    const response = await apodMongoService.saveNasa(req);
    res.json(response);
}
async function savePictureOfTheDate(req, res){
    const query = {
        date: req.query.date
    };
    const axiosParams = querystring.stringify({api_key: apiKey, ...query})
    console.log(axiosParams);
    axios.get(`https://api.nasa.gov/planetary/apod?${axiosParams}`)
        .then((response) => {
            saveSendMongodb(response.data, res);
            
        })
        .catch(err => {
            res.status(500).json(err);
        });
}




module.exports = {getPictureOfTheDay, getMarsPicture, saveSendMongodb, savePictureOfTheDate};