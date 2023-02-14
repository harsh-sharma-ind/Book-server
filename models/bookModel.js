const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('Book', bookSchema);