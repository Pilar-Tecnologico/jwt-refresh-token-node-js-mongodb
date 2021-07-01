const { authJwt } = require("../middlewares");
const controller = require("../controllers/poke.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/poke/get/:pokemon", 
    [authJwt.verifyToken], 
    controller.getPokemon);

  app.get(
    "/api/poke/list/", 
    [authJwt.verifyToken], 
    controller.listPokemon);
  

  //Get last 5 result of /api/poke/get/
  app.get(
    "/api/poke/last/", 
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.lastUses);
}