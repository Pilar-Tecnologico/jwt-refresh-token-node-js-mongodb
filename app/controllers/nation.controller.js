const axios = require('axios').default;
const querystring = require('querystring');
const apodMongoService = require('../services/database/apod.mongo.service');
const { ubication: Ubication } = require("../models")

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

async function saveUbication(req, res){
    //const response = await apodMongoService.saveApod();
    //res.json(response);
    const query={
        lat: req.query.x,
        lon: req.query.y
    };
    const axiosParams = querystring.stringify(query);
    axios.get(`https://apis.datos.gob.ar/georef/api/ubicacion?${axiosParams}`)
        .then((response)=>{
            const newUbication = new Ubication({
                coordenadas: {
                    lat: response.data.ubicacion.lat,
                    lon: response.data.ubicacion.lon,
                },
                provincia: response.data.ubicacion.provincia.nombre,
                departamento: response.data.ubicacion.departamento.nombre,
                municipio: response.data.ubicacion.municipio.nombre
            });
            console.log(newUbication);
            newUbication.save((err)=>{
                if(err){
                    res.status(500).send({"message": "Error"});
                    return;
                }
            });
            res.send({message: "New Ubication added to DB"});
        })
        .catch(err=>{
            res.status(500).json(err);
        });
}

module.exports={getProvinces, getProvince, getIndex, getDepartment, getUbication, saveUbication}