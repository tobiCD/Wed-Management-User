const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const ViewEngine = require('./config/viewEngine.js')
const port = 3000;
const app = express()
const Router1 = require("./route/index")
const mysql = require('mysql2')
const dirname = require('path')
const DBConnection = require('./config/db.js')
const path = require('path')
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');

const InitRouteAPI = require('./route/Route API.js')



app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/css",express.static(__dirname+ "public"));
// console.log((__dirname, "public/css"))
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
app.use(express.json())
InitRouteAPI(app);





app.use('/',Router1)
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})