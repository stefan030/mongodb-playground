// No need to require Mocha, but we have to require assert
const assert = require('assert');
const MarioChar = require('../models/mariochar');
const connection = require('../connection.js');


// Describe tests e.g. 'connect to db'...
describe('Saving records', () => {

    // Create tests - Each 'it' block represents single test
    it('Saves a record to the database', (done) => {

        // New instance of a MarioChar using MarioChar model
        var char = new MarioChar({
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

    // Next test goes here

});