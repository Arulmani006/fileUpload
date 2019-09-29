"use strict";
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

//API for login with user data and generate JWT token
router.post('/api/login', (req, res ) => {
    var user = {
        id:req.body.id,
        userName:req.body.name,
        Email:req.body.email
    }
    jwt.sign({user:user}, 'secretKey', {expiresIn:600}, (err, token) => {
        res.json({
            token,
            user
        })
    })
});

module.exports = router