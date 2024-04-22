const express = require('express');
const bodyparser = require('body-parser');
const app = express()
const sequelize = require('./utils/database')

const userRouter = require('./router/user-router')


app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/',userRouter)
sequelize
    // .sync({force : true})
    .sync()
    .then((result)=>{
        app.listen(3000)
    })
    .catch((err)=>{
        console.log("error : "+ err);
    })