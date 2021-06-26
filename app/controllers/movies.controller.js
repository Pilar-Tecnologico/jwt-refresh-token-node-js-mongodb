const api_key = process.env.MOVIE_API_KEY;
const axios = require('axios');
const Bookmark = require('../models/moviesBookmarks.model');

module.exports = {
  popular: async (req, res) => {
    //Get a list of the current popular movies on TMDB. This list updates daily.
    const page = req.params.page;

    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`
      )
      .then(async (resp) => {
        res.json(resp.data);
      })
      .catch((err) => {
        res.status(401).json({ message: 'Bad Request', error: err });
      });
  },
  latest: async (req, res) => {
    //This gets the newly created movie
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/latest?api_key=${api_key}&language=en-US`
      )
      .then(async (resp) => {
        res.json(resp.data);
      })
      .catch((err) => {
        res.status(401).json({ message: 'Bad Request', error: err });
      });
  },
  upcoming: async (req, res) => {
    /* Get a list of upcoming movies in theatres. 
    This is a release type query that looks for all movies that 
    have a release type of 2 or 3 within the specified date range. */
    const page = req.params.page;
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=${page}`
      )
      .then(async (resp) => {
        res.json(resp.data);
      })
      .catch((err) => {
        res.status(401).json({ message: 'Bad Request', error: err });
      });
  },
  topRated: async (req, res) => {
    //Get the top rated movies on TMDB
    const page = req.params.page;
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${page}`
      )
      .then(async (resp) => {
        res.json(resp.data);
      })
      .catch((err) => {
        res.status(401).json({ message: 'Bad Request', error: err });
      });
  },
  genresList: async (req, res) => {
    //Get the list of official genres for movies.
    await axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`
      )
      .then(async (resp) => {
        res.json(resp.data);
      })
      .catch((err) => {
        res.status(401).json({ message: 'Bad Request', error: err });
      });
  },
  byId: async (req, res) => {
    //Get the primary information about a movie.
    const movieId = req.params.movieId;
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`
      )
      .then(async (resp) => {
        res.json(resp.data);
      })
      .catch((err) => {
        res.status(401).json({ message: 'Bad Request', error: err });
      });
  },
  similar: async (req, res) => {
    //Get a list of similar movies. This is not the same as a "Recommendation"
    const movieId = req.params.movieId;
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key}&language=en-US`
      )
      .then(async (resp) => {
        res.json(resp.data);
      })
      .catch((err) => {
        res.status(401).json({ message: 'Bad Request', error: err });
      });
  },
  images: async (req, res) => {
    //Get the images that belong to a movie.Get the images that belong to a movie.
    const movieId = req.params.movieId;
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${api_key}&language=en-US`
      )
      .then(async (resp) => {
        res.json(resp.data);
      })
      .catch((err) => {
        res.status(401).json({ message: 'Bad Request', error: err });
      });
  },
  getbookmarks: (req, res) => {
    const userId = req.userId;
    Bookmark.findOne({ userId: userId }).exec((err, _bookmark) => {
      if (_bookmark === null) {
        res
          .status(404)
          .json({ message: `The user doesn't have bookmarked movies` });
      }
      res.json(_bookmark);
    });
  },
  postbookmarks: async (req, res) => {
    const userId = req.userId;
    Bookmark.findOne({ userId: userId }).exec(async (err, _bookmark) => {
      if (err !== null) {
        res.status(409).json({
          message: 'Something went wrong',
          error: err,
        });
      }
      if (_bookmark === null) {
        //If _bookmark is null, we create a new object with a new Array contaning the moviedId
        const bookmark = new Bookmark();
        bookmark.userId = userId;
        bookmark.bookmarks = [...req.body.bookmarks];

        await bookmark
          .save()
          .then((resp) =>
            res.json({ message: 'Bookmark saved', bookmark: bookmark })
          )
          .catch((err) =>
            res.status(409).json({
              message: 'User bookmarks found, but something went wrong',
              error: err,
            })
          );
      } else {
        //if _bookmark is not null, it means it found the user bookmark list, so we just need to push the new movieId

        //Now we need to check if the moviesId that we want to add, already exists or not in the user bookmark list
        let body = req.body.bookmarks;
        body = body.filter(
          (_movieId) => !_bookmark.bookmarks.includes(_movieId)
        );

        //If the body.length == 0 it means all the ID already exists in the list
        if (body.length) {
          await Bookmark.findByIdAndUpdate(_bookmark._id, {
            $push: { bookmarks: [...req.body.bookmarks] },
          })
            .then((resp) => {
              res.json({ message: 'Bookmark updated', updatedBookmark: resp });
            })
            .catch((err) => {
              res.status(404).json({ message: 'Invalid Id' });
            });
        } else {
          //Status 200, because the request is good, but the ids already exists
          res.json({
            message: 'Those Movies already exist in the bookmark list',
          });
        }
      }
    });
  },
  deletebookmarks: async (req, res) => {
    //this will delete the hole object, including the userId
    const userId = req.userId;
    Bookmark.findOneAndDelete({ userId: userId }).exec((err, resp) => {
      err
        ? res
            .status(404)
            .json({ message: 'Bad request. Please check userId is valid' })
        : res.json({ message: 'Bookmark cleared' });
    });
  },
  removebookmarks: async (req, res) => {
    //This will remove 1 or more bookmarks from the user bookmark list
    //This function needs to receive a list containing the moviesId you wish to remove, even if its just 1 movie
    const userId = req.userId;
    Bookmark.findOne({ userId: userId }).exec(async (err, _bookmark) => {
      if (err !== null) {
        res.status(409).json({
          message: 'Something went wrong',
          error: err,
        });
      }
      if (_bookmark === null) {
        res.status(409).json({
          message: `The User doesn't have any bookmarked movies`,
          error: err,
        });
      }
      //if _bookmark is not null, it means it found the user bookmark list, so we just need to push the new movieId
      const bookmarksToRemove = req.body.bookmarks;

      await Bookmark.findByIdAndUpdate(_bookmark._id, {
        $pull: { bookmarks: { $in: bookmarksToRemove } },
      })
        .then((resp) => {
          res.json({ message: 'Bookmark updated', updatedBookmark: resp });
        })
        .catch((err) =>
          res
            .status(409)
            .json({ message: 'Something went wrong updating the list' })
        );
    });
  },
};
