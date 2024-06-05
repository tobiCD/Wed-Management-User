const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const ViewEngine = require('../config/viewEngine.js')
const app = express()
const Router1 = express.Router()
const  {CreateUser,QueryData, UpdateList , UpdateDone ,DeleteUser,DeleteDone ,view,SearchView}  =require("../controllers/HomeController.js")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())


Router1.get('',QueryData);

Router1.get('/add',(req,res)=>{
    res.render('customers/add')
})
Router1.get('/edit/:id', UpdateList)
Router1.post('/createDone',CreateUser)
Router1.post('/edit',UpdateDone)
Router1.post('/edit/:id',DeleteDone)
Router1.get('/view/:id', view)
Router1.post('/search',SearchView)



module.exports = Router1