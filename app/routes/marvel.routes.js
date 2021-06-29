const controller = require("../controllers/marvel.controller");
const { authJwt } = require("../middlewares");

module.exports = function(app) {  
    app.get(
      "/marvel/character",
      [authJwt.verifyToken, authJwt.isUser],
      controller.getCharacter
    );

    app.get(
      "/marvel/characters/:id",
      [authJwt.verifyToken, authJwt.isUser],
      controller.getCharacterById
    )

    app.post(
      "/marvel/savecharacters/",
      [authJwt.verifyToken, authJwt.isUser],
      controller.postCharacterById
    )
  };