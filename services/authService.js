require('dotenv').config();
var User = require('../models/User')
const jwt = require('jsonwebtoken');
var passwordHash = require('password-hash');
var cookieParser = require('cookie-parser');


 
const signup = (req, res, next) => {

    let user = new User({
        email : req.body.email,
        maxcalories : req.body.maxcalories,
        password : passwordHash.generate(req.body.password)
    })
    user.save()
    .then(user => {
        res.json({
            message: 'successfully Registered',
        })
    })
    .catch(err => {
        res.redirect('/signup')
        console.log(err);

    })
}

const login = (req, res, next) => {
    var email = req.body.email
    var password = req.body.password

     User.findOne({email : email})
    .then(User => {
        if(User){
         const isPasswordVerified = passwordHash.verify(password, User.password);
         if (isPasswordVerified) {
             let token = jwt.sign({email : User.email}, process.env.SECRETKEY , {expiresIn : '1h'})
             res.cookie("jwt", token ,{
                 expires : new Date(Date.now() + 600000),
                 httpOnly:true
             })
           res.redirect("/dashboard")
         } else {
            res.json({
                message  : 'login failed' ,
            })
         }         
        }else{  
         res.redirect('signup')
        }
    })
}

module.exports = {
    signup , login
}