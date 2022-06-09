const express = require('express');
const app = express();

const studentRouter = require('./api/routes/student');

const facultyRouter = require('./api/routes/faculty');

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