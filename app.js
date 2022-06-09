const express = require('express');
const app = express();

const studentRouter = require('./api/routes/student');

const facultyRouter = require('./api/routes/faculty');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://spyadavg:Surya@123@cluster0.gi9rs.mongodb.net/?retryWrites=true&w=majority')

mongoose.connect.on('error', (err) => {
    console.log('Error in connecting to database', err);
});


mongoose.connection.on('connected', () => {
    console.log('connected to mongodb');
});


app.use('/faculty', facultyRouter);

app.use('/student', studentRouter);



app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
})

app.use((req, res, next) => {
    res.status(404).json({
        error: '404 Page not found'
    });
})

module.exports = app;