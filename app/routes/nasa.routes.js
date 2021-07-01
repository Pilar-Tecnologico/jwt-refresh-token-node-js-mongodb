const express = require('express');
const router = express.Router();
const nasaController = require('../controllers/nasa.controller')

router.get('/data', function(req, res) {
  //COMPLETE WITH YOUR CODE
  nasaController.getData(req,res)
});

module.exports = router;
