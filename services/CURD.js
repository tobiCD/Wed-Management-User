const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const port = 3000;
const app = express()
const mysql = require('mysql2/promise');
const dirname = require('path')
const path = require('path')
const DBConnection = require('../config/db')




const GetUserByid = async(Userid)=>{
    let [Results, fields]= await DBConnection.query(`select * from Users where id = ?`,[Userid]);
    let user  = Results && Results.length > 0 ? Results[0]: {};
    return user   
}
const GetUpdateByid = async(email , name , city, telephone , detail, id )=>{
    let[Results,fields] = await DBConnection.query("UPDATE Users SET email = ?, name = ?, city = ?, telephone =?, detail =? WHERE id = ?",[email, name , city  , telephone,detail,id])

}
const GetdeleteById = async(UserId)=>{
    let [Results , fields] = await DBConnection.query('Delete from Users WHERE id = ?',[UserId])
    return Results

}
const DeleteDone = async(req, res )=>{

}
module.exports = {
    GetUserByid , GetUpdateByid , GetdeleteById
}