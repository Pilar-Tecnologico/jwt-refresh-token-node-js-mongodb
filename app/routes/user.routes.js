const { authJwt } = require("../middlewares");
const express = require('express');
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

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

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

  app.get("/api/test/city",
   // [authJwt.verifyToken, authJwt.isUser],
    controller.city
  );

  app.post("/api/test/city",
    //[authJwt.verifyToken, authJwt.isUser],
    controller.city
  );

  app.get("/api/test/current",
    //[authJwt.verifyToken, authJwt.isUser],
    controller.current
  );

  app.post("/api/test/current",
    //[authJwt.verifyToken, authJwt.isUser],
    controller.current
  );
};


