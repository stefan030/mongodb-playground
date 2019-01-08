// No need to require Mocha, but we have to require assert
const assert = require('assert');
const MarioChar = require('../models/mariochar');
const connection = require('../connection.js');


// Describe tests e.g. 'connect to db'...
describe('Deleting records', () => {

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
    it('Deletes one record from the database', (done) => {

        MarioChar.findOneAndDelete({name: 'Mario'}).then(() => {
           // Make sure that we removed record by looking up via findOne
           MarioChar.findOne({name: 'Mario'}).then((result) => {
              assert(result === null);
              done();
           });
        });

    });

    // Next test goes here

});