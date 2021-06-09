var express = require('express');
var router = require('express').Router();
var authService = require('../services/authService')
const authenticate = require('../middleware/authenticate')



router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/dashboard' , authenticate, (req, res) => {
    res.render('dashboard');

})


router.get('/signup', (req, res) => {
    res.render('signup');
})


router.post('/signup', authService.signup)
router.post('/login', authService.login)


module.exports = router;