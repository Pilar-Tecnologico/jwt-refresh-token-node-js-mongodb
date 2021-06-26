const controller = require("../controllers/games.controller");
const { authJwt } = require("../middlewares");

module.exports = function(app) {  
  app.get(
    "/ftp_games",
    [authJwt.verifyToken, authJwt.isUser],
    controller.getGames
  );

  app.get(
    "/ftp_game/:id",
    [authJwt.verifyToken, authJwt.isUser],
    controller.getGameById
  )

  app.post(
    "/add_game/",
    [authJwt.verifyToken, authJwt.isUser],
    controller.postGameById
  )
  };