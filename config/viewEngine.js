const path = require('path');
const express = require('express');

const ViewEngine = (app) => {
    app.set('views', path.join('tutorial', 'views')); // Correct string concatenation
    console.log('check dirname:', path.join('./tutorial', 'views')); // Proper logging of __dirname
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, 'public'))); // Correct string concatenation
};

module.exports = ViewEngine;
