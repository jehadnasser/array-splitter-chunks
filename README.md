Array splitter into chunks
=========
[![Build Status](https://travis-ci.org/JehadNasser/array-splitter-chunks.svg?branch=master)](https://travis-ci.org/JehadNasser/array-splitter-chunks)

A small library will Split array into n-size chunks

## Installation

  `npm install`

## Usage

    var arrayChunks = require('array-splitter-chunks');

    var array = [1, 2, 3, 4, 5, 6, 7 ,8 ,9];

    arrayChunks(array, 2, function(err, chunks) {
      console.log(chunks);
      `// OUTPUT: [[1, 2], [3, 4], [5, 6], [7, 8], [9]]`
    });

## Tests

  `npm test`
