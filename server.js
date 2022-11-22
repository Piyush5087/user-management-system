const express = require('express');
const bodyparser = require("body-parser");
const path = require('path');
const dotenv = require('dotenv');

const connectDB = require('./server/database/connection');

const app = express();
dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

connectDB();

app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")

app.use('/css', express.static(path.resolve(__dirname, "public/css")))
app.use('/images', express.static(path.resolve(__dirname, "public/images")))
app.use('/js', express.static(path.resolve(__dirname, "public/js")))

app.use('/',require('./server/routes/router'))

app.listen(PORT, ()=>{console.log(`Server is running at local host ${PORT}`)});