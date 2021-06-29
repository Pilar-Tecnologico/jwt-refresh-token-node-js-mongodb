const express = require('express');
const { authJwt } = require("../middlewares");

const fifaController=require('../controllers/fifacontroller')

module.exports = function(app) {  
  app.get(
    "/fut",
    [authJwt.verifyToken, authJwt.isUser],
    fifaController.getfifa
  );

  app.post(
    "/club",
    [authJwt.verifyToken, authJwt.isUser],
    fifaController.postClubById
  )

  app.get(
    "/player",
    [authJwt.verifyToken, authJwt.isUser],
    fifaController.getplayer
  )
  };

/* router.get('/fut', function(req, res) {

  //COMPLETE WITH YOUR CODE
  fifaController.getfifa(req, res)
});


router.post('/club', function(req, res) {

  //COMPLETE WITH YOUR CODE
  fifaController.postClubById(req, res)
});

router.get('/player', function(req, res) {

  //COMPLETE WITH YOUR CODE
  fifaController.getplayer(req, res)
});



module.exports = router; */
