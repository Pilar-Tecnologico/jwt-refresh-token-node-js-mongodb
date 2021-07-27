const axios = require('axios').default;
const querystring = require('querystring');
const db = require('../models');
const { province: Province } = db;

async function getProvincesList(req, res){
    
    axios.get(`https://apis.datos.gob.ar/georef/api/provincias`)
    .then((response) => {
        res.status(200).json(response.data);
    })
    .catch(err => {
        res.status(400).json({
            code: 'bad_request',
            message: 'Bad request. Please check your parameters values'
        })
    })
};

async function getProvince(req, res){
    
    const params = req.params.provinceName;
    
    axios.get(`https://apis.datos.gob.ar/georef/api/provincias?nombre=${params}`)
    .then((response) => {
        res.status(200).json(response.data);
    })
    .catch(err => {
        res.status(400).json({
            code: 'bad_request',
            message: 'Bad request. Please check your parameters values'
        })
    })
};

async function saveProvince(req, res){
        
    const params = req.params.provinceName;
    
    axios.get(`https://apis.datos.gob.ar/georef/api/provincias?nombre=${params}`)
    .then((response) => {
        const province = new Province({id: response.data.provincias[0].id, nombre:  response.data.provincias[0].nombre})
        console.log(province);
    
        province.save(err => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
        });
        res.send({ message: "Province was added!" });
    })
    .catch(err => {
        res.status(400).json({
            code: 'bad_request',
            message: 'Bad request. Please check your parameters values'
        })
    });

};

module.exports = {getProvincesList, getProvince, saveProvince};
