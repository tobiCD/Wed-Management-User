const mysql = require('mysql2')
require('dotenv').config();
const DBConnection = mysql.createConnection({
    port : process.env.DB_PORT,
    host :process.env.DB_HOST,
    user :process.env.DB_USER,
    password :process.env.DB_PW,
    database : process.env.DB_NAME,
})