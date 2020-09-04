const express=require('express');
const mongoose=require('mongoose');
const url = 'mongodb://localhost/akshantar1'

const app= express();

mongoose.connect(url,{useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log('we re connected!')
})

app.use(express.json())

const route = require('./routers/detail')
app.use('/candidate',route)

app.listen(9000,function(){
    console.log('server started')
})