const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const dbConfig = require("./app/config/db.config");

const apiGoogleTranslate = require("./app/routes/apiGoogleTranslate.routes");
const apiCatResponse = require("./app/routes/apiCatResponse.routes");
const apiVerifier = require("./app/routes/apiVerifier.routes");
const apiMovies = require("./app/routes/apiMovies.routes");

const app = express();

let corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const { allAccess } = require("./app/controllers/user.controller");
const Role = db.role;

db.mongoose
  .connect(dbConfig.dbUri, dbConfig.mongooseOptions)
  .then(() => {
    console.log("Successful connection with MongoDB.");
    initial();
  })
  .catch((err) => {
    console.log(dbConfig.dbUri);
    console.error("Connection error.", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Final Task application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// Verifier
// Free API to weed out disposable, non-existent or invalid emails without any limits.
app.use("/apiVerifier", apiVerifier);

// The Open Movie Database
// The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users. This api allows you to search a title by its name, year, plot, and returns response in either JSON or XML.
app.use("/apiMovies", apiMovies);

// Google Transate
// Dynamically translate between languages.
app.use("/apiGoogleTranslate", apiGoogleTranslate);

// HTTP Cats
// Cat for every HTTP Status. You can use this API to show pictures of cats instead of boring codes on the website. Like 404 code shows an image hiding under the bed with is tale visible. Fun ways to boost humour on your website.
app.use("/apiCatResponse", apiCatResponse);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
