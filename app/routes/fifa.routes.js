const express = require('express');
const router = express.Router();

const fifaController=require('../controllers/fifacontroller')

router.get('/fut', function(req, res) {

  //COMPLETE WITH YOUR CODE
  fifaController.getfifa(req, res)
});

module.exports = router;
