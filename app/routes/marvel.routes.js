const marvelController = require('../controllers/marvel.controller');
const { authJwt } = require("../middlewares");

module.exports = function(app) {
    
    app.get('/characters', 
        [authJwt.verifyToken, authJwt.isUser],
        marvelController.getMarvelCharacters
    );

    app.get('/comics/:id', 
        [authJwt.verifyToken, authJwt.isUser],
        marvelController.getMarvelComics
    );

    app.get('/series/', 
        [authJwt.verifyToken, authJwt.isUser],
        marvelController.getMarvelSeries
    );

    app.get('/series/character/:id', 
        [authJwt.verifyToken, authJwt.isUser],
        marvelController.getMarvelSeriesPerCharact
    );
    
};