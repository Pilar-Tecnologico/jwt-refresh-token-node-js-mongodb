const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

const dbUri = `mongodb+srv://${dbHost}/${dbName}?retryWrites=true&w=majority`;

console.log(dbUri)
const mongooseOptions = {
    user: dbUser,
    pass: dbPass,
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
};

module.exports = {
    dbUri, mongooseOptions
}

