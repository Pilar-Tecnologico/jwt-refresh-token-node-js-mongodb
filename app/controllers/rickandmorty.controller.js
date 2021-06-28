const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;
const db = require("../models");
const { char: Character } = db;

async function getChars(req, res){

  await axios.get(`https://rickandmortyapi.com/api/character`)
    .then((response) => {
        let data = response.data.results;
        let datachars = [];

        datachars = data.map((x) => {
          let chars = {};
          chars.name = x.name;
          chars.status = x.status;
          chars.species = x.species;
          chars.gender = x.gender;
          chars.origin = x.origin.name;
          return chars;
          })
        res.json(datachars);
    })
    .catch(err => {
      res.status(400).json({
        "code": "bad_request",
        "message": "Bad request. Please check your parameters values"
      });
    });
};

async function getCharById(req, res){
    const id = req.params.id;

    await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
          res.json(response.data);
      })
      .catch(err => {
        res.status(400).json({
          "code": "bad_request",
          "message": "Bad request. Please check your parameters values"
        });
      });
};

async function postCharById(req, res){
    const id = req.body.id;

    await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        const char = new Character({
          name: response.data.name,
          status: response.data.status,
          species: response.data.species,
          gender: response.data.gender,
          origin: response.data.origin.name
        });
        char.save(err => {
          if (err) {
              res.status(500).send({ message: err });
              return;
          }
        });
        res.send({ message: "Character was added!" });
      })
      .catch(err => {
        res.status(400).json({
          "code": "bad_request",
          "message": "Bad request. Please check your parameters values"
        });
      });
};

module.exports = {getCharById, postCharById, getChars};