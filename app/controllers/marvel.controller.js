// API : https://developer.marvel.com/ 
const querystring = require('querystring')
const axios = require('axios');
const db = require("../models");
const { chara: Character } = db;
const APIKEY  = process.env.API_KEY
const HASH  = process.env.HASH


//Get all the characters with their id, name and description
async function getCharacter(req, res){

    const query = querystring.stringify({apikey : APIKEY, hash: HASH, ts:1})
    await axios.get(`https://gateway.marvel.com:443/v1/public/characters?${query}`)
        .then((response) => {
            let all = response.data.data.results;
            let characterresult = '';
            characterresult = all.map((char) => {
                let charres = {};
                charres.id = char.id;
                charres.name = char.name;
                charres.description = char.description;
                return charres;
            })
            res.json(characterresult);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

//Get all the characters by their id

//examples: id= 1011334 
//examples: id= 1017100 
//examples: id= 1009144 
//examples: id= 1010699 
//examples: id= 1009146 
async function getCharacterById(req, res){
    const query = querystring.stringify({apikey : APIKEY, hash: HASH, ts:1})
    const id = req.params.id;
    await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?${query}`)
        .then((response) => {
            let all = response.data.data.results;
            console.log(all)
            let characterresult = '';
            characterresult = all.map((char) => {
                let charres = {};
                charres.id = char.id;
                charres.name = char.name;
                charres.description = char.description;
                return charres;
            })
        res.json(characterresult);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}


//Publish a character by id in the database

//examples: id= 1011334 
//examples: id= 1017100 
//examples: id= 1009144 
//examples: id= 1010699 
//examples: id= 1009146 
async function postCharacterById(req, res){
    const query = querystring.stringify({apikey : APIKEY, hash: HASH, ts:1})
    const id = req.body.id;
    await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?${query}`)
        .then((response) => {
            const dataChar = response.data.data.results.find(result => result.id === id);
            const chara = new Character({
                id: dataChar.id,
                name: dataChar.name,
                description: dataChar.description,
            });
            console.log(chara)
            chara.save(err => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
            });
            res.send({ message: "Character was added successfully!" });
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

module.exports = {getCharacter, getCharacterById, postCharacterById};