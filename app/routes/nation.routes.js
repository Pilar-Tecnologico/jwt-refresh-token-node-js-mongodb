const express = require('express');
const router = express.Router();
const nationController=require('../controllers/nation.controller')

router.get('/', async function(req, res){
    nationController.getIndex(req, res);
});

router.get('/provincia', async function(req, res){
    nationController.getProvince(req, res);
});

router.get('/departamento/:provincia', async function(req, res){
    nationController.getDepartment(req, res);
});

router.get('/ubicacion/:coord', async function(req, res){
    nationController.getUbication(req, res);
});

router.post('/lugar/:coord', async function(req, res){
    nationController.saveSite(req, res);
});

module.exports=router;