const controllerProvinces = require("../controllers/provinces.controller")


module.exports = function(app){

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    
    // provinces
    app.get("/api/provinces", controllerProvinces.getProvinces);

    app.get("/api/city", controllerProvinces.getCitys);
}