const controller = require("../controllers/rickandmorty.controller");
const { authJwt } = require("../middlewares");

module.exports = function(app) {
  app.get(
    "/rickandmorty/characters",
    [authJwt.verifyToken, authJwt.isUser],
    controller.getChars
  );

  app.get(
    "/rickandmorty/character/:id",
    [authJwt.verifyToken, authJwt.isUser],
    controller.getCharById
  );
  
  app.post(
    "/rickandmorty/add_character/",
    [authJwt.verifyToken, authJwt.isUser],
    controller.postCharById
  );
};