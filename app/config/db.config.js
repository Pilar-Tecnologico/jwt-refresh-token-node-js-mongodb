const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbCluster = process.env.DB_CLUSTER;
const dbName = 'PilarTecno';

const db = require("../models");
const Role= require("../models/role.model");
const dbUri = `mongodb+srv://${dbUser}:${dbPass}@${dbCluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const mongooseOptions = {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true};

const dbConnection = async () => {
    db.mongoose
  .connect(dbUri, mongooseOptions)
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
}

// system roles loading
const initial = () => {
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




module.exports = { dbConnection };