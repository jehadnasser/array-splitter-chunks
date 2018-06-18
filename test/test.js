'use strict';

var expect = require('chai').expect;
var arrayChunks = require('../index');

describe('#arrayChunks', function() {
    it('should convert array into n-size chunks', function() {
        // Input array
        var array = [1, 2, 3, 4, 5, 6, 7 ,8 ,9];

        // Chunks length zero
        var arrIntoLengthZeroChunks = [[],[],[],[],[],[],[],[],[]];
        // check
        arrayChunks(array, 0, function(err, chunks) {
          expect(chunks).to.eql(arrIntoLengthZeroChunks);
        });

        // Chunks length one
        var arrIntoLengthOneChunks = [[1],[2],[3],[4],[5],[6],[7],[8],[9]];
        // check
        arrayChunks(array, 1, function(err, chunks) {
          expect(chunks).to.eql(arrIntoLengthOneChunks);
        });

        // Chunks length two
        var arrIntoLengthTwoChunks = [[1, 2], [3, 4], [5, 6], [7, 8], [9]];
        // check
        arrayChunks(array, 2, function(err, chunks) {
          expect(chunks).to.eql(arrIntoLengthTwoChunks);
        });

        // Chunks length three
        var arrIntoLengthThreeChunks = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        // check
        arrayChunks(array, 3, function(err, chunks) {
          expect(chunks).to.eql(arrIntoLengthThreeChunks);
        });

        // Chunks length four
        var arrIntoLengthFourChunks = [[1, 2, 3, 4], [5, 6, 7, 8], [9]];
        // check
        arrayChunks(array, 4, function(err, chunks) {
          expect(chunks).to.eql(arrIntoLengthFourChunks);
        });

        // Chunks length five
        var arrIntoLengthFiveChunks = [[1, 2, 3, 4, 5], [6, 7, 8, 9]];
        // check
        arrayChunks(array, 5, function(err, chunks) {
          expect(chunks).to.eql(arrIntoLengthFiveChunks);
        });

        // Chunks length six
        var arrIntoLengthSixChunks = [[1, 2, 3, 4, 5, 6], [7, 8, 9]];
        // check
        arrayChunks(array, 6, function(err, chunks) {
          expect(chunks).to.eql(arrIntoLengthSixChunks);
        });

        // Chunks length seven
        var arrIntoLengthSevenChunks = [[1, 2, 3, 4, 5, 6, 7], [8, 9]];
        // check
        arrayChunks(array, 7, function(err, chunks) {
          expect(chunks).to.eql(arrIntoLengthSevenChunks);
        });

        // Chunks length eight
        var arrIntoLengthEightChunks = [[1, 2, 3, 4, 5, 6, 7, 8], [9]];
        // check
        arrayChunks(array, 8, function(err, chunks) {
          expect(chunks).to.eql(arrIntoLengthEightChunks);
        });

        // Chunks length nine
        var arrIntoLengthNineChunks = [[1, 2, 3, 4, 5, 6, 7, 8, 9]];
        // check
        arrayChunks(array, 9, function(err, chunks) {
          expect(chunks).to.eql(arrIntoLengthNineChunks);
        });

        // Chunks length ten
        var arrIntoLengthTenChunks = [[1, 2, 3, 4, 5, 6, 7, 8, 9]];
        // check
        arrayChunks(array, 10, function(err, chunks) {
          expect(chunks).to.eql(arrIntoLengthTenChunks);
        });
    });
});
