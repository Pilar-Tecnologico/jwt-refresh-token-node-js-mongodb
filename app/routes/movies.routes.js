const express = require('express');
const router = express.Router();
const { authJwt } = require('../middlewares/index');
const {
  popular,
  latest,
  topRated,
  upcoming,
  genresList,
  byId,
  similar,
  images,
  getbookmarks,
  postbookmarks,
  deletebookmarks,
  removebookmarks,
} = require('../controllers/movies.controller');

router.get('/popular/:page', authJwt.verifyToken, popular);

router.get('/latest', authJwt.verifyToken, latest);

router.get('/top_rated', authJwt.verifyToken, topRated);

router.get('/upcoming', authJwt.verifyToken, upcoming);

router.get('/details/:movieId', authJwt.verifyToken, byId);

router.get('/similar/:movieId', authJwt.verifyToken, similar);

router.get('/genres', authJwt.verifyToken, genresList);

router.get('/images/:movieId', authJwt.verifyToken, images);

router.get('/bookmarks', authJwt.verifyToken, getbookmarks);

router.post('/bookmarks', authJwt.verifyToken, postbookmarks);

router.post('/bookmarks/remove', authJwt.verifyToken, removebookmarks);

router.delete('/bookmarks', authJwt.verifyToken, deletebookmarks);

module.exports = router;
