const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbName = 'PilarTecno'
const dbUri = `mongodb+srv://${dbUser}:${dbPass}@pilartecno.6mrs6.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const mongooseOptions = {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true};


module.exports = {
    dbUri, mongooseOptions
}