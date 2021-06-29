const axios = require('axios').default;
const querystring = require('querystring');
const apodMongoService = require('../services/database/apod.mongo.service');

async function getProvinces(){
    axios.get(`https://apis.datos.gob.ar/georef/api/provincias`)
        .then((response)=>{
            res.status(200).json(response.data);
        })
        .catch(err=>{
            res.status(500).json(err);
        });
}

async function getIndex(req, res){
    res.status(200).json({message: 'Nacion Route'});
}

async function getProvince(req, res){
    const query={
        nombre: req.query.nombre,
        max:100
    };
    const axiosParams = querystring.stringify(query);
    axios.get(`https://apis.datos.gob.ar/georef/api/provincias?${axiosParams}`)
        .then((response)=>{
            res.status(200).json(response.data);
        })
        .catch(err=>{
            res.status(500).json(err);
        });
}

async function getDepartment(req, res){
    const query={
        nombre: req.query.nombre
    };
    const axiosParams = querystring.stringify(query);
    axios.get(`https://apis.datos.gob.ar/georef/api/departamentos?${axiosParams}`)
        .then((response)=>{
            res.status(200).json(response.data);
        })
        .catch(err=>{
            res.status(500).json(err);
        });
}

async function getUbication(req, res){
    const query={
        lat: req.query.x,
        lon: req.query.y
    };
    const axiosParams = querystring.stringify(query);
    axios.get(`https://apis.datos.gob.ar/georef/api/ubicacion?${axiosParams}`)
        .then((response)=>{
            res.status(200).json(response.data);
        })
        .catch(err=>{
            res.status(500).json(err);
        });
}

async function saveSite(req, res){
    //const response = await apodMongoService.saveApod();
    //res.json(response);
    console.log(req.body);
}

module.exports={getProvinces, getProvince, getIndex, getDepartment, getUbication, saveSite}