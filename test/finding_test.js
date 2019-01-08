// No need to require Mocha, but we have to require assert
const assert = require('assert');
const MarioChar = require('../models/mariochar');
const connection = require('../connection.js');


// Describe tests e.g. 'connect to db'...
describe('Finding records', () => {

    // Define variable globally so we have full access to it, even outside of beforeEach
    var char;

    beforeEach((done) => {
        // New instance of a MarioChar using MarioChar model
        char = new MarioChar({
            name: 'Mario'
        });

        // Since .save is async mongoose method, we need to use promise (.then) in order for assert to work properly
        char.save().then(() => {
            // True if its saved locally, and false if it is being saved to database (its NOT new record)
            assert(char.isNew === false);
            // Tell Mocha that test is done since we are using async method
            done();
        });
    });

    // Create tests - Each 'it' block represents single test
    it('Finds one record from the database', (done) => {

        MarioChar.findOne({name: 'Mario'}).then((result) => {
            assert(result.name === 'Mario');
            done();
        });

    });

    // Next test goes here

    it('Finds one record by ID from the database', (done) => {

        // Mongoose .findOne does not require .toString as the Mongoose is cleaver enough to understand that we want to find a record with same ID
        MarioChar.findOne({_id: char._id}).then((result) => {
            // assert requires toString() so we get the actual string of that object ID (check Robomongo for more details about type of record)
            assert(result._id.toString() == char._id.toString());
            done();
        });

    });

    // Next test goes here

});