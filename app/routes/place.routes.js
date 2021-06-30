const {
  searchPlace,
  deletePlace,
  getAllplaces,
  getOnePlaceByID,
  editPlace,
} = require("../controllers/place.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/place", [authJwt.verifyToken, authJwt.isUser], getAllplaces);

  app.get(
    "/api/place/:id",
    [authJwt.verifyToken, authJwt.isUser],
    getOnePlaceByID
  );

  app.put("/api/place/:id", [authJwt.verifyToken, authJwt.isUser], editPlace);

  app.delete(
    "/api/place/:id",
    [authJwt.verifyToken, authJwt.isUser],
    deletePlace
  );

  app.post("/api/place", [authJwt.verifyToken, authJwt.isUser], searchPlace);
};
