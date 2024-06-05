const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const port = 3000;
const app = express()
const mysql = require('mysql2/promise');
const dirname = require('path')
const path = require('path')
const DBConnection = require('../config/db')
const {GetUserByid , GetUpdateByid , GetdeleteById} = require('../services/CURD.js')


const getQueryData =async (req,res)=>{
let [Results , fields ]= await DBConnection.query(`select * from Users u`) 
   return res.status(200).json({
        message : 'ok',
        data : Results
    })
}
const CreateUser = async(req,res)=>{
    let {email,name,city}=req.body
    if(!email || !name || !city){
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    let [Results, fields]= await DBConnection.query('INSERT INTO Users(email,name,city) VALUES (?,?,?)',[email,name,city]);
    res.status(200).json({
        message :'ok',
        data : Results
    })
    
}
const UpdateUser = async(req,res)=>{
    let { email, name, city, id } = req.body;

    if (!email || !name || !city ||!id){
        return res.status(200).json({
            message : 'Incorrect'
    })
}    GetUpdateByid(email, name, city, id)
    return res.status(200).json({
        message : 'ok'
    })
    }
const DeleteUser = (req,res)=>{
    let id = req.params.id
    if (!id){
        return res.status(200).json({
            message : 'no find id'
        })
    }
    GetdeleteById(id)
    return res.status(200).json({
        message : `delete member${id} is ok`

    })

}




module.exports = {
    getQueryData , CreateUser,UpdateUser,DeleteUser
}