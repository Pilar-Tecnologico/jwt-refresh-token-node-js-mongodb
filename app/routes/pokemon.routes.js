const express = require('express');
const router = express.Router();
const pokeController = require('../controllers/pokemon.controller')
const { authJwt } = require("../middlewares");

router.get('/list', function(req, res) {
  //COMPLETE WITH YOUR CODE
  pokeController.getPokemon(req,res)
});

router.get('/list/:pokeType', function(req, res) {
    //COMPLETE WITH YOUR CODE
    pokeController.getPokemonByType(req,res)
  });

router.post('/add_pokemon/', function(req,res){
    pokeController.postPokeById(req,res)
})

module.exports = router;


