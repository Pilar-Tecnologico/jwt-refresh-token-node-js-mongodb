const express = require('express');
const router = express.Router();
const nasaController = require('../controllers/nasa.controller');

/* GET home page. */
router.get('/', async function(req, res) {
  nasaController.getIndex(req, res);
});

/* GET Nasa page. */
router.get('/apod', async function(req, res) {
    nasaController.getPictureOfTheDay(req, res);
  });

/* GET Mars Picture page. */
router.get('/mars', async function(req, res) {
  nasaController.getMarsPicture(req, res);
});

/* POST Apod. */
router.post('/apod', async function(req, res) {
  nasaController.savePictureOfTheDay(req, res);
});

module.exports = router;