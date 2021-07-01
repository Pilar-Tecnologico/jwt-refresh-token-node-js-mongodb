const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;
const db = require("../models");
const { pokemon: Pokemon } = db;


async function getPokemon(req,res){
    //Get the name of the first 100 pokemons
    const limit = 100;

    await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}%22`)
        .then((response) => {
           let data = response.data.results;
           data = data.map(({name}) => ({name: name})); 
           res.status(200).json( data );
        })
        .catch((err) => {
            res.status(400).json({
                code: "bad_request",
                message: "Bad request. Please check your parameters values",
            });
        });
}

async function getPokemonByType(req,res){
    // Get pokemons by type
    const pokeType = req.params.pokeType;
    

    await axios.get(`https://pokeapi.co/api/v2/type/${pokeType}/`)
        .then((response) =>{
            let data = response.data.pokemon;
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({
                code: "bad_request",
                message: "This type dosn't exist",
            });
        });

}

// save your pokemon by id
async function postPokeById(req, res){
    const id = req.body.id;

    await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => {
            const data = response.data;

            const pokemon = new Pokemon({
                id_pokemon: id, 
                name: data[0]["name"]
            });
            pokemon.save();
            res.status(201).json( {data: pokemon} )
        })
        .catch(err => {
            res.status(500).json({error: "No agregado"});
        });
} 


module.exports = {getPokemon, getPokemonByType, postPokeById};

