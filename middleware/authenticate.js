const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        console.log(token);
        const verifyUser = jwt.verify(token, process.env.SECRETKEY)
        
        next();
    } catch (error) {
        
        res.json({ message : 'falied'})
    }
}
module.exports = authenticate;