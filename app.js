"use strict";
const express  = require("express");
const app      = express();
const bodyParser = require('body-parser');
const port     = process.env.PORT || 8080;
const userRoutes = require('./routes/users');

app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// routes 
app.use('/user', userRoutes);

// launch 
app.listen(port);
console.log(`The magic happens on port ${port}`);