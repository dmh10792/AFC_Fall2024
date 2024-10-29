require("dotenv").config();

//DB CONNECTION
const {PG_HOST, PG_PORT, PG_DB, PG_USER, PG_PW} = process.env;
const credentials = {
    host:PG_HOST,
    port:PG_PORT,
    database:PG_DB,
    user:PG_USER,
    password:PG_PW
}
const {Client} = require("pg");
const conn = new Client(credentials);

conn.connect()
    .then(console.log(`Connected to the ${PG_DB} database from conn`))
    .catch(err => console.log(`Error connecting to the ${PG_DB} database`, err))

module.exports = conn;