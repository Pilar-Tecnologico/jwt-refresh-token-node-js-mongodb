const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken, authJwt.isUser], controller.userBoard);

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
    "/api/test/operator",
    [authJwt.verifyToken, authJwt.isOperator],
    controller.operatorBoard
  );

  app.post(
    "/api/test/apigis",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apigisBoard
  );


  app.get(
    "/api/test/apia",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apiaBoard
  );

  app.get(
    "/api/test/apib",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apibBoard
  );

  app.post(
    "/api/test/apinasa",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apicBoard
  );
  
  app.post(
    "/api/test/apigis",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apigisBoard
  );


  app.get(
    "/api/test/apia",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apiaBoard
  );

  app.get(
    "/api/test/apib",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apibBoard
  );

  app.post(
    "/api/test/apinasa",
    [authJwt.verifyToken, authJwt.isUser],
    controller.apicBoard
  );
  
app.get("/api/test/apilibra", [authJwt.verifyToken, authJwt.isUser],
 controller.apiLibraBoard
 );

 app.get("/api/test/apilibrauthor", [authJwt.verifyToken, authJwt.isUser],
 controller.apiLibraAuthorBoard
 );

app.post("/api/test/savelibra", [authJwt.verifyToken, authJwt.isUser],
 controller.apisaveLibraBoard
 );

};

