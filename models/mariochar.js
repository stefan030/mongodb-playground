const mongoose = require('mongoose');

// Every model is based on schema which tells MongoDB how each of record in collection should look like
const Schema = mongoose.Schema;

// Create Schema - Properties defined in schema are optional, not every instance of Mario character has to have weight e.g.
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

// Create Model
const MarioChar = mongoose.model('mariochar', MarioCharSchema); // 'mariochar' - collection name which will be based on MarioCharSchema schema


module.exports = MarioChar;

