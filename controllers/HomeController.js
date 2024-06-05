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




const CreateUser = async (req,res)  =>{
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let telephone = req.body.telephone
    let detail = req.body.detail
    console.log("Results >>  name : ", name , 'email :',email , 'city :', city, 'telephone:',telephone ,'detail:',detail)
try {
    let [Results, fields]= await DBConnection.query('INSERT INTO Users(email,name,city,telephone,detail) VALUES (?,?,?,?,?)',[email,name,city,telephone,detail]);
    // console.log(Results)
    res.redirect('/')
} catch (error) {
    console.log(error)
    res.status(500).send('Error creating user');
}
  
}
const QueryData = async(req,res)=>{
    try {
        let [Results , fields ]= await DBConnection.query(`select * from Users u`)
        
        res.render('home' , { customer : Results})


    } catch (error) {
        console.log(error)
        res.status(500).send('query database is incorrect')
    }
}
const UpdateList = async(req,res)=>{
    const Userid = req.params.id
    let user = await GetUserByid(Userid)
    res.render('customers/edit' , {customer : user})
}

const UpdateDone = async(req,res)=>{
    try {
        const { id ,name, email, city, telephone, detail  } = req.body;
       
        console.log(`Updating user with ID: ${id}`);
        await GetUpdateByid(email, name, city, telephone, detail, id);
        return res.redirect(`/`);
      } catch (error) {
        console.error(error);
        res.status(500).send(errorMessage);
      }
   

 
}
const DeleteUser = async(req,res)=>{
    const id = req.params.id
    console.log(id)
    let user =await GetUserByid(id)
    // console.log(">>>The item deleted :" ,Results)
    res.render('customers/edit', {customer : user})
}
const DeleteDone = async(req, res )=>{
    const id = req.params.id
    console.log(id)
    await GetdeleteById(id)
    res.redirect('/')
}
const view = async(req,res)=>{
    const id = req.params.id
    console.log(id)
    let user = await GetUserByid(id)
    res.render('customers/view',{
        customer : user
    })
}
const SearchView = async (req,res)=>{
    try {
        const searchTerm = req.body.searchTerm
        const query = `SELECT * FROM Users WHERE name LIKE ? OR email LIKE ? OR city LIKE ?`;
        const values = [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`];

        // Use a promise-based approach for the database query
        const [Results,fields] = await DBConnection.query(query, values);

        res.render('customers/search',{customers : Results})
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while searching for customers');
    }
    
}
module.exports = {CreateUser , QueryData, UpdateList , UpdateDone , DeleteUser ,DeleteDone ,view,SearchView}