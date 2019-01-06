const mongoose = require('mongoose');


// Connect to db before tests run
// Mocha hook - 'before'
before((done) => {
    // Connect to mongodb
    mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true});


    // Just listen to this event once, also check if there is an error
    mongoose.connection.once('open', () => {
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', (error) => {
        console.log('Connection error: ', error);
    });
});

// Drop the characters collection before each test - isolation test
beforeEach((done) => {
   // Drop the collection
    mongoose.connection.collections.mariochars.drop(() => {
        done();
    });
});


