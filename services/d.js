//router.get('/dashboard' , authenticate  , (req, res) => {
    res.render('dashboard');

})
let token = jwt.sign({email : User.email}, process.env.SECRETKEY , {expiresIn : '1h'})
res.cookie("jwt", token ,{
    expires : new Date(Date.now() + 600000),
    httpOnly:true
})