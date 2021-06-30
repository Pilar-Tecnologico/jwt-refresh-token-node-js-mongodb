const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const catdb = require ('../config/catSchema');


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.get(
    "/api/test/music",
    [authJwt.verifyToken, authJwt.isUser],
    controller.musicBoard
  );

  app.get(
    "/api/test/cat",
    [authJwt.verifyToken, authJwt.isUser],
    controller.catBoard
  );

  app.post("/api/test/save", 
  [authJwt.verifyToken, authJwt.isUser],
   controller.saveBoard,
  );
  
  app.get(
    "/api/test/song",
    [authJwt.verifyToken, authJwt.isUser],
    controller.songBoard
  );

  app.get(
    "/api/test/pizza",
    [authJwt.verifyToken, authJwt.isUser],
    controller.pizzaBoard
  );
};
