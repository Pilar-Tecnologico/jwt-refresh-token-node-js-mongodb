// https://www.freetogame.com/api-doc
// Free-To-Play Games Database API

const axios = require('axios');
const db = require("../models");
const { game: Game } = db;

// Get all the games free to play.
async function getGames(req, res){
    const platform = req.query.platform ? req.query.platform : 'all';
    const sortby = req.query.sortby ? req.query.sortby : 'relevance';
    const category = req.query.category;
    const params = category 
        ? `?platform=${platform}&sort-by=${sortby}&category=${category}`
        : `?platform=${platform}&sort-by=${sortby}`;
    await axios.get(`https://www.freetogame.com/api/games${params}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

// Get game by id.
async function getGameById(req, res){
    const id = req.params.id;
    await axios.get(`https://www.freetogame.com/api/game?id=${id}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

// add game by id
async function postGameById(req, res){
    const id = req.body.id;
    await axios.get(`https://www.freetogame.com/api/game?id=${id}`)
        .then((response) => {
            const game = new Game({
                title: response.data.title,
                platform: response.data.platform,
                game_url: response.data.game_url,
                genre: response.data.genre,
                description: response.data.description
            });
            game.save(err => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
            });
            res.send({ message: "Game was added successfully!" });
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

module.exports = {getGames, getGameById, postGameById};