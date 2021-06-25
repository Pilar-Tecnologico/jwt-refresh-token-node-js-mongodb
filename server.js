const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const app = express();

let corsOptions = {
  origin: "*"
};


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const { request } = require("express");
const Role = db.role;

//CONEXION A LA BD DE ATLAS
db.mongoose
  .connect(dbConfig.dbUri, dbConfig.mongooseOptions)
  .then(() => {
    console.log("CONNECT TO MONGODB.");
    initial();
  })
  .catch(err => {
    console.error("CONNECTION ERROR", err);
    process.exit();
  });

 //simple route
app.get("/", (req, res) => {
  res.json({ message: "BIENVENIDOS A LA TAREA FINAL DEL CURSO." });
 });

  

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
