const { authJwt } = require("../middlewares");
const controller = require("../controllers/apis.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Apis 

  app.get("/api/apimusic",[authJwt.verifyToken, authJwt.isUser], controller.apiMusicArtis);

  app.get("/api/apigeo",[authJwt.verifyToken, authJwt.isUser], controller.apiGeoRef);

  
  app.get("/api/apinasa",[authJwt.verifyToken, authJwt.isUser], controller.apiNasaPic);
  app.get("/api/apinasa/mars",[authJwt.verifyToken, authJwt.isUser],controller.apiNasaMars);
  app.post("/api/apinasa",[authJwt.verifyToken, authJwt.isUser],controller.apiNasaSave);
  

  app.get("/api/apicats",[authJwt.verifyToken, authJwt.isUser],controller.apiCatsName);
  app.post("/api/apicats",[authJwt.verifyToken, authJwt.isUser],controller.apiCatsSave);

};