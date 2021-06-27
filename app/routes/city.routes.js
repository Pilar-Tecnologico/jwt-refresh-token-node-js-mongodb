const controller = require('../controllers/city.controller');
const { authJwt } = require('../middlewares');

module.exports = function(app) {
    app.get("/city",
    [authJwt.verifyToken, authJwt.isUser],
    controller.getCity
  );

  app.post("/city",
    [authJwt.verifyToken, authJwt.isUser],
    controller.postCity
  );
};