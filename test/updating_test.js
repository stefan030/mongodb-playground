// No need to require Mocha, but we have to require assert
const assert = require('assert');
const MarioChar = require('../models/mariochar');
const connection = require('../connection.js');


// Describe tests e.g. 'connect to db'...
describe('Updating records', () => {

    // Define variable globally so we have full access to it, even outside of beforeEach
    var char;

    beforeEach((done) => {
        // New instance of a MarioChar using MarioChar model
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        });

        // Since .save is async mongoose method, we need to use promise (.then) in order for assert to work properly
        char.save().then(() => {
            // Tell Mocha that test is done since we are using async method
            done();
        });
    });

    // Create tests - Each 'it' block represents single test
    it('Updates one record from the database', (done) => {

        MarioChar.findOneAndReplace({name: 'Mario'}, {name: 'Luigi'}).then(() => {
            MarioChar.findOne({_id: char._id}).then((result) => {
                assert(result.name === 'Luigi');
                done();
            });
        });

    });

    // Next test goes here

    // Create tests - Each 'it' block represents single test
    it('Inrements the weight by 1', (done) => {
        // $inc - update operator, take the current weight and increment it by 1 in this case
        MarioChar.updateMany({}, { $inc: { weight: 1 } }).then(() => {
           MarioChar.findOne({name: 'Mario'}).then((record) => {
               assert(record.weight === 51);
               done();
           });
        });

    });

    // Next test goes here

});