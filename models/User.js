require('dotenv').config();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: 'string'
    },
    password: {
        type: 'string'
    },
    maxcalories: {
        type: 'string'
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User