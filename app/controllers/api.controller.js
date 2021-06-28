const axios = require('axios').default;
const querystring = require('querystring');
const saveVote = require ('../services/database/catdb.mongo.service');
const  mongoose = require('mongoose');
const apikey = process.env.API_KEY;

async function getMusic(req, res){
    const query = {  
        s: req.query.s,
        max:100
    };
    const axiosParams = querystring.stringify({...query} );

    axios.get(`https://theaudiodb.com/api/v1/json/1/discography.php?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

async function getCat(req, res){
    if(req.query.q !== undefined){
        const query = {  

            q: req.query.q
             
            
        };
        const axiosParams = querystring.stringify({api_key: apikey, ...query} );
    
        axios.get(`https://api.thecatapi.com/v1/breeds/search?${axiosParams}`)
            .then((response) => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    } else{
     
        axios.get(`https://api.thecatapi.com/v1/breeds?`)
            .then((response) => {
                res.json(response.data);
            })
            .catch(err => {
                res.status(500).json(err);
            });
        
    }
   
}

async function saveCatBreeds(req, res){
    const response = await saveVote.saveVote(req) ;
    res.json(response);
};

//AQUI EN EL POST NO PUDE ENCONTRAR EL ERROR, ME CREO UNA COLECCION
//DENTRO DE MI BASE DE DATOS PERO ME LOS CARGABA VACIO, SOLO GENERANDO
//EL ID 
async function postCat(req, res){
    const query = { 
        
         name: req.query.name    
     };
     const axiosParams = querystring.stringify({api_key: apikey, ...query} );
 
    axios.get(`https://api.thecatapi.com/v1/favourites?${axiosParams}`)
         .then((response) => {
             saveCatBreeds(response.data, req);
         })
         .catch(err => {
             res.status(500).json(err);
         });

        
}



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

async function getPizza(req, res){
    const query = {  
        orders: req.query.orders,
        max:100
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


module.exports = {getMusic, getCat, postCat,getSong,getPizza}; 