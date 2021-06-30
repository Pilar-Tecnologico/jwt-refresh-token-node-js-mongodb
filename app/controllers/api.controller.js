const axios = require('axios').default;
const querystring = require('querystring');
const cat = require('../services/database/catDB.mongo.service');

//own get code n°1
async function getAlbum(req,res){
    const query = {
        s: req.query.s
     };

    const axiosParams = querystring.stringify({ ...query});
    axios.get(`https://theaudiodb.com/api/v1/json/1/discography.php?${axiosParams}`) 
        .then((response) => { 
            res.json(response.data); 
        }) 
        .catch(err => { 
            res.status(500).json(err); 
        }); 
}

//own get code n°2
async function getCat(req,res){
    const query = {
        q: req.query.q
     };

    const axiosParams = querystring.stringify({ ...query});
    axios.get(`https://api.thecatapi.com/v1/breeds/search?${axiosParams}`) 
        .then((response) => { 
            res.json(response.data); 
        }) 
        .catch(err => { 
            res.status(500).json(err); 
        }); 
}

//own get code n°3
async function getPizza(req, res){
    const query = {  
        orders: req.query.orders,
    };
    const axiosParams = querystring.stringify({...query} );
    axios.get(`https://order-pizza-api.herokuapp.com/api/swagger.json?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

//own get code n°4
async function getSong(req, res){
    const query = {  
        pattern: req.query.pattern,
        max:100
    };
    const axiosParams = querystring.stringify({...query} );
    axios.get(`http://www.songsterr.com/a/ra/songs.xml?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

async function saveCatBreeds(req, res){
    const response = await cat.saveVote(req[0]);
    res.json(response);
};

async function postCat(req, res){
    const query = { 
        q: req.query.q
     };
     const axiosParams = querystring.stringify({...query} );
 
    axios.get(`https://api.thecatapi.com/v1/breeds/search?${axiosParams}`)
         .then((response) => {
             saveCatBreeds(response.data, res);
         })
         .catch(err => {
             res.status(500).json(err);
         });
      
}

module.exports = {getAlbum, getCat, getPizza, getSong, postCat};