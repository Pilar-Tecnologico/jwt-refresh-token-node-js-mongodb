require('dotenv').config();
const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");

const app = express();

const PORT = process.env.PORT || 3000;

let corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// connect databases
dbConfig.dbConnection();

//const db = require("./app/models");
//const Role = db.role;

/*db.mongoose
  .connect(dbConfig.dbUri, dbConfig.mongooseOptions)
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });*/

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to pilarTecno application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
