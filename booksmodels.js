const { timeStamp } = require('console');
const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
},{
    timeStamp:true
});
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
//module.exports = studentSchema;