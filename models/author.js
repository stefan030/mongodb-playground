const mongoose = require('mongoose');

// Every model is based on schema which tells MongoDB how each of record in collection should look like
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    pages: Number
});

// Create Schema - Properties defined in schema are optional, not every instance of Mario character has to have weight e.g.
const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [
        BookSchema
    ]
});


// Create Model
const Author = mongoose.model('author', AuthorSchema); // 'author' - collection name which will be based on AuthorSchema schema


module.exports = Author;