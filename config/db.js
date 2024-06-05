const mysql = require('mysql2/promise');
require('dotenv').config();
// const DBConnection = mysql.createConnection({
//     port : process.env.DB_PORT,
//     host :process.env.DB_HOST,
//     user :process.env.DB_USER,
//     password :process.env.DB_PW,
//     database : process.env.DB_NAME,
// })

const DBConnection = mysql.createPool({
        port : process.env.DB_PORT,
        host :process.env.DB_HOST,  
        user :process.env.DB_USER,
        password :process.env.DB_PW,
        database : process.env.DB_NAME,
        waitForConnections : true,
        connectionLimit : 10,
        queueLimit : 0
    })
    
module.exports = DBConnection