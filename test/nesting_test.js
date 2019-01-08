const assert = require('assert');
const mongoose = require('mongoose');
const connection = require('../connection.js');
const Author = require('../models/author');

// Describe tests
describe('Nesting records', () => {

    // Drop the database first
    beforeEach((done) => {
        mongoose.connection.collections.authors.drop(() => {
           done();
        });
    });

    // Create tests
    // Create new author
    it('Creates an author with sub-documents', (done) => {
        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [
                {
                    title: 'Name of the Wind',
                    pages: 400
                }
            ]
        });

        pat.save().then(() => {
           Author.findOne({name: 'Patrick Rothfuss'}).then((record) => {
               assert(record.books.length === 1);
               done();
           });
        });
    });

    // Add a book to an existing author
    it('Adds a book to an author', (done) => {
        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [
                {
                    title: 'Name of the Wind',
                    pages: 400
                }
            ]
        });

        pat.save().then(() => {
            Author.findOne({name: 'Patrick Rothfuss'}).then((record) => {
                // Add a book to the books array
                record.books.push({title: 'Wise Man\'s fear', pages: 500});
                // Save record with the new book added in to database
                record.save().then(() => {
                   Author.findOne({name: 'Patrick Rothfuss'}).then((result) => {
                       assert(result.books.length === 2);
                       done();
                   });
                });
            });
        });

    });

});