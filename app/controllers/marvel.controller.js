const axios = require('axios').default;
const querystring = require('querystring');
const {hashs, params} = require('../config/apikeyHash.config');

// Characters List
async function getMarvelCharacters(req, res){

    axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&${params}&${hashs}`)

        .then((response)=>{
            
            let data = response.data.data.results;
            data = data.map(({id,name}) => ({id: id, name: name}) );

            res.status(200).json( data );

        })
        .catch((err) => {
            res.status(400).json({
                code: "bad_request",
                message: "Bad request. Please check your parameters values",
            });
        });
};

//  Comics for characters
//  Characters that appeared in a comic
async function getMarvelComics(req, res){

    const characterId =  req.params.id;
    console.log(characterId);
     axios.get(`http://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=1&${params}&${hashs}`)

         .then((response)=>{

            let data = response.data.data.results
            
            res.status(200).json(data);
            
        })
        .catch((err) => {
            res.status(400).json({
                code: "bad_request",
                message: "Bad request. Please check your parameters values",
            });
        });

};

// Series List
async function getMarvelSeries(req, res){

    axios.get(`http://gateway.marvel.com/v1/public/series?ts=1&${params}&${hashs}`)

         .then((response)=>{
            let data = response.data.data.results
            data = data.map(({ id ,title ,startYear ,endYear ,thumbnail }) => ({
                id: id, 
                title: title, 
                startYear: startYear,
                endYear:  endYear,
                thumbnail: thumbnail.path+".jpg"
            }) );
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({
                code: "bad_request",
                message: "Bad request. Please check your parameters values",
            });
        });

};

// Series for characters
// Characters that appeared in series
async function getMarvelSeriesPerCharact(req, res){

    const characterId =  req.params.id;
    console.log(characterId);
    
    axios.get(`http://gateway.marvel.com/v1/public/characters/${characterId}/series?ts=1&${params}&${hashs}`)

         .then((response)=>{

            let data = response.data.data.results
            data = data.map(({ id ,title ,startYear ,endYear ,thumbnail }) => ({
                id: id, 
                title: title, 
                startYear: startYear,
                endYear:  endYear,
                thumbnail: thumbnail.path+".jpg"
            }) );
            
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({
                code: "bad_request",
                message: "Bad request. Please check your parameters values",
            });
        });
}; 

module.exports = {getMarvelCharacters,getMarvelComics, getMarvelSeries, getMarvelSeriesPerCharact}; 