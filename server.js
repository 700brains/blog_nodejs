//Require Files
const express = require('express');
const mongoose = require('mongoose');
const mysql = require('mysql');
const colors = require('colors');
const dotenv = require('dotenv');

//Include Fxternal Files
dotenv.config({path: './config/config.env'});
const configFilesDB = require('./config/db');
//const middleware = requre('./middlewares/');

//DB connection

//Create App
const app = express();

//Middlewares

//Routes


const PORT = process.env.PORT || 5000;
app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`.yellow.bold)
    );
    //Handle Unhandled Promise Reection
    process.on('unhandledRejection', (err,promise)=>{
        console.log(`Error: ${err.message}`.red);
        //close server and exit process
        server.close(()=>process.exit(1));
    });
