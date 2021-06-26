const controller = require("../controllers/lotr.controller");
const { authJwt } = require("../middlewares");

module.exports = function(app) {  
    app.get(
      "/lotr/character",
      [authJwt.verifyToken, authJwt.isUser],
      controller.getCharacter
    );

    app.get(
      "/lotr/book/",
      [authJwt.verifyToken, authJwt.isUser],
      controller.getBooks
    )

    app.get(
      "/lotr/book/:id",
      [authJwt.verifyToken, authJwt.isUser],
      controller.getChapterxBook
    )
  };
