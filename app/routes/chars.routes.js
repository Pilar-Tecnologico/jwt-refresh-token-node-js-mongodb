const { authJwt } = require("../middlewares");

const controller = require("../controllers/char.controller");


module.exports = function(app) {
    app.post(
        "/add_char/",
        [authJwt.verifyToken, authJwt.isUser],
        controller.postCharById
    )
};
