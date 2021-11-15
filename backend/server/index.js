// Manages node app startup, & routing of api endpoints for updating mongodb db.

// let express = require('express');
import express from 'express';
// let mongoose = require('mongoose');
import mongoose from 'mongoose';
// let cors = require('cors');
import cors from 'cors';
// let mongoDb = require('./db');
import mongoDb from './db';

const TodoRoute = require('./todo.route')

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected!')
},
error => {
    console.log(error)
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());
app.use('/api', TodoRoute);


const port = process.env.PORT || 5050;
// const server = app.listen(port, () => {
//     console.log('Connected on : ' + port)
// });
app.listen(port, () => {
    console.log('Connected on : ' + port)
});

app.use(function (err, req, res, next) {
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});