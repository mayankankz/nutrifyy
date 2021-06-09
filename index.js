var express =  require('express');
var app = express();
const authRouter = require('./routes/auth');
const user = require('./models/User');
const db = require('./db/conn');
const authenticate = require('./middleware/authenticate')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('public'));
//app.use(authenticate);


app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

app.get('/',  (req, res) => {
    res.render('main');
})


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

app.use(function(err, req, res, next) {
    if (err) {
        console.log(err);
        res.sendStatus(500);
    } else {
        next();
    }
})
app.use(authRouter);