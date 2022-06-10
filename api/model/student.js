const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    
    name: {
        type: String,
        required: false
    },  
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Student', studentSchema);