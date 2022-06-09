const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    
    name: {
        type: String,
        required: true
    },  
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Student', studentSchema);