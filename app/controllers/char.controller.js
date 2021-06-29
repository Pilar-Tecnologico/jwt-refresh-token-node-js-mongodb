const axios = require('axios');
/* const Char = require('../models/char.model'); */
const {hashs, params} = require('../config/apikeyHash.config');
const db = require("../models");
const { char: Char } = db;

// save your character by id
async function postCharById(req, res){
    const id = req.body.id;
    
    await axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&${params}&${hashs}`)
    .then((response) => {
            const data = response.data.data.results
            const img = data[0]["thumbnail"]["path"]
            const ext = data[0]["thumbnail"]["extension"]
            
            const char = new Char({
                id_api: id, 
                name: data[0]["name"],
                path_img: `${img}.${ext}`,
            });
            char.save();
            res.status(201).json( {data: char} )
        })
        .catch(err => {
            res.status(500).json(err);
        });
} 
module.exports = {postCharById};