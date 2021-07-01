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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect databases
dbConfig.dbConnection();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to pilarTecno application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/football.routes")(app);

// listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
