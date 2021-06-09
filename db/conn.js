const mongoose = require('mongoose')
const db =mongoose.connect('mongodb://localhost:27017/nutrify', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
}).then (() => {
    console.log('Connection established');
}).catch((e) => {
    console.log('no connection');
})
module.exports = db;