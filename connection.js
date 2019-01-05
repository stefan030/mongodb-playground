const mongoose = require('mongoose');

// Connect to mongodb

mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true});


// Just listen to this event once, also check if there is an error
mongoose.connection.once('open', () => {
    console.log('Connection has been made, now make fireworks...');
}).on('error', (error) => {
    console.log('Connection error: ', error);
});