// No need to require Mocha, but we have to require assert
const assert = require('assert');

// Describe tests e.g. 'connect to db'...
describe('some demo tests', () => {

    // Create tests - Each 'it' block represents single test
    it('adds two numbers together', () => {
        // Predict result or what we want result to be
        assert(2 + 3 === 5);
    });

});