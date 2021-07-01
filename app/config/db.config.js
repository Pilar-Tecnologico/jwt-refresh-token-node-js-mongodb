const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbCluster = process.env.DB_CLUSTER;
const dbName = 'PilarTecno';

const db = require("../models");
const Role = require("../models/role.model");
const dbUri = `mongodb+srv://${dbUser}:${dbPass}@${dbCluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const mongooseOptions = {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true};

const dbConnection = async () => {
    db.mongoose
  .connect(dbUri, mongooseOptions)
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    Role.initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
}


module.exports = { dbConnection };