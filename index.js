'use strict';
/**
 * Split array into n-size chunks
 * @author Jehad Nasser
 * @version 1.0.0
 *
 * @param {array} inputArray
 * @param {number} nSize
 * @return {array}
 */

module.exports = function (inputArray, nSize, callback) {

  // Check inputs and throw exceptions
  if (!Array.isArray(inputArray)) {
    return callback(new TypeError('Expected an array!'));
  }

  if (isNaN(nSize)) {
    return callback(new TypeError('Expected the size of chunks to be a number!'));
  }

  // Split array into chunks.
  var chunks = inputArray.reduce(
                    (accumulator, currentValue, currentIndex) =>
                      (currentIndex % nSize)
                        ? accumulator
                        : [...accumulator, inputArray.slice(currentIndex, currentIndex + nSize)]
                    , []);

  callback(null, chunks);
};
