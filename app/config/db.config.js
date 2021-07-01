require('dotenv').config();
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbName = 'PilarTecno'
//const dbUri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.qtcrz.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const dbUri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.cuggj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const mongooseOptions = {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true};


module.exports = {
    dbUri, mongooseOptions
}