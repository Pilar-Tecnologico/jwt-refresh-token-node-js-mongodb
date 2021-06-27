const controller = require('../controllers/current.controller');
const { authJwt } = require('../middlewares');

module.exports = function(app) {
   /*  app.post(
        "/current",
         // [authJwt.verifyToken, authJwt.isUser],
        controller.saveCurrent
    ) */

    app.get("/current",
    [authJwt.verifyToken, authJwt.isUser],
    controller.getCurrent
  );
};