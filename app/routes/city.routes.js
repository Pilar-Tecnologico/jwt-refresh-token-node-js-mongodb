const { searchCity, deleteCity, getAllcities, getOneCityByID, editCity } = require("../controllers/city.controller");
const { authJwt } = require("../middlewares");


module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/city", [authJwt.verifyToken, authJwt.isUser], getAllcities);

    app.get("/api/city/:id", [authJwt.verifyToken, authJwt.isUser], getOneCityByID);

    app.put("/api/city/:id", [authJwt.verifyToken, authJwt.isUser], editCity);

    app.delete("/api/city/:id", [authJwt.verifyToken, authJwt.isUser], deleteCity);

    app.post("/api/city", [authJwt.verifyToken, authJwt.isUser], searchCity)

};
