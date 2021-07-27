const express = require('express');
const router = express.Router();
const provinceController = require('../controllers/province.controller')
const { authJwt } = require('../middlewares') 

router.get('/list', 
[authJwt.verifyToken, authJwt.isUser],
function(req, res) {   
  provinceController.getProvincesList(req,res);
});

router.get('/:provinceName', 
[authJwt.verifyToken, authJwt.isUser],
function(req, res) { 
  provinceController.getProvince(req,res);
});

router.post('/newProvince/:provinceName',
[authJwt.verifyToken, authJwt.isUser],
function(req, res) { 
  provinceController.saveProvince(req,res);
});

module.exports = router;
