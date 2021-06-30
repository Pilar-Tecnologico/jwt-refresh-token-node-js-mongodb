const axios = require('axios').default;
const querystring = require('querystring');
const apiKey = process.env.API_KEY;
const apodMongoService = require('../services/database/api.mongo.service');

// API The AudioDB Simple Music Art and Metadata (Database of audio)

async function getAlbumName(req, res) {
    const queryMusic = { s: req.query.s };
    const axiosParams = querystring.stringify({ ...queryMusic });
    await axios.get(`https://theaudiodb.com/api/v1/json/1/discography.php?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

//  API of the Geographic Data Standardization Service of Argentina

async function getCityName(req, res) {

    if (req.query.nombre !== undefined ) {
        const queryCity = { nombre: req.query.nombre};
        const axiosParams = querystring.stringify({ ...queryCity });
        await axios.get(`https://apis.datos.gob.ar/georef/api/provincias?${axiosParams}`).then((response) => {
            res.json(response.data);
        }).catch(err => {
            res.status(500).json(err);
        });
    }
    else {
        await axios.get(`https://apis.datos.gob.ar/georef/api/provincias`).then((response) => {
            res.json(response.data);
        }).catch(err => {
            res.status(500).json(err);
        });
    }

}


// API Nasa this site is to make NASA data, including imagery, eminently accessible to application developers.


async function getPictureOfTheDay(req, res){
    const query = {
        date: req.query.date,
        start_date: req.query.start_date,
        end_date: req.query.end_date
    };
    const axiosParams = querystring.stringify({api_key: apiKey, ...query})
    await axios.get(`https://api.nasa.gov/planetary/apod?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

async function getMarsPicture(req, res){
    const query = {
        earth_date: req.query.earth_date,
        camera:req.query.camera
    };
    const axiosParams = querystring.stringify({api_key: apiKey, ...query});
    await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

async function saveNasaMongoDb(req, res){
    const response = await apodMongoService.saveNasa(req);
    res.json(response);
}
async function savePictureOfTheDate(req, res){
    const query = {
        date: req.query.date
    };
    const axiosParams = querystring.stringify({api_key: apiKey, ...query})
    console.log(axiosParams);
    await  axios.get(`https://api.nasa.gov/planetary/apod?${axiosParams}`)
        .then((response) => {
            saveNasaMongoDb(response.data, res);
            
        })
        .catch(err => {
            res.status(500).json(err);
        });
}
// API Search for a Breed by using part of it’s names.


async function getCatsRace(req, res){

    if(req.query.q !== undefined ){
    const query = {
        q: req.query.q
    };
    const axiosParams = querystring.stringify({...query});
    await axios.get(`https://api.thecatapi.com/v1/breeds/search?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
    }

else{
    await axios.get(`https://api.thecatapi.com/v1/breeds?`)
    .then((response) => {
        res.json(response.data);
    })
    .catch(err => {
        res.status(500).json(err);
    });

}

}

async function saveCatsMongoDb(req, res){
   const response = await apodMongoService.saveCats(req);
    res.json(response);
}
async function saveCatsRace(req, res){
    const query = {
        q: req.query.q
      
    };
    const axiosParams = querystring.stringify({ ...query})
    console.log(axiosParams);
    await  axios.get(`https://api.thecatapi.com/v1/breeds/search?${axiosParams}`)

        .then((response) => {
            
            saveCatsMongoDb(response.data[0],res);
            
        })
        .catch(err => {
            res.status(500).json(err);
        });
}




module.exports = { getAlbumName, getCityName, getPictureOfTheDay, getMarsPicture, savePictureOfTheDate, getCatsRace, saveCatsRace };
