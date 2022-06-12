const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    
    title: {
        type: String,
        required: true
    },  
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Student', studentSchema);