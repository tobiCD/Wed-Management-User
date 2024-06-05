const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const ViewEngine = require('../config/viewEngine.js')
const app = express()
const Router1 = express.Router()
const ApiController = require('../controllers/ApiController.js')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
const route2 = express.Router()



function InitRouteAPI(app){
   route2.get('/listUser',ApiController.getQueryData );
   route2.post('/creatUser',ApiController.CreateUser);
   route2.put('/update-user',ApiController.UpdateUser)
   route2.delete('/delete/:id',ApiController.DeleteUser)

   return app.use('/api/v1/', route2)
}
module.exports = InitRouteAPI