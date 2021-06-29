const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbName = 'pilartecno'
const dbUri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.lifms.mongodb.net/${dbName}`;

// mongodb+srv://${dbUser}:${dbPass}@cluster0.lifms.mongodb.net/${dbName}

const mongooseOptions = {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false};


module.exports = {
    dbUri, mongooseOptions
}