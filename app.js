const express = require('express');
const app = express();

const studentRouter = require('./api/routes/student');

const facultyRouter = require('./api/routes/faculty');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://spyadavg:JB0LbAYuPFpGBvGr@cluster0.gi9rs.mongodb.net/?retryWrites=true&w=majority');





mongoose.connection.on('connected', (connected) => {
    console.log('connected to mongodb');
});

mongoose.connection.on('error', (err) => {
    console.log('Error in connecting to database');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/faculty', facultyRouter);

app.use('/student', studentRouter);



// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works!'
//     });
// })

app.use((req, res, next) => {
    res.status(404).json({
        error: '404 Page not found'
    });
})

module.exports = app;