'use strict';

const fs = require('fs').promises;

const buffers = {
  article: stringToBuffer('<article>'),
  articleClose: stringToBuffer('</article>'),
  h2: stringToBuffer('<h2>'),
  h2Close: stringToBuffer('</h2>'),
  h3: stringToBuffer('<h3>'),
  h3Close: stringToBuffer('</h3>'),
  p: stringToBuffer('<p>'),
  pClose: stringToBuffer('</p>'),
  newline: stringToBuffer('\n'),
};

let indexBuffer = Buffer.alloc(0);

fs.readFile('./files/pair-programming.txt')
  .then((fileContents) => {

    indexBuffer = Buffer.concat([indexBuffer, buffers.article, buffers.newline]);
    console.log(bufferToString(indexBuffer));

  })
  // .then(() => { console.log(fileBuffer); })
  .catch((err) => {
    throw err;
  });

/**
 * stringToBuffer takes in a string and returns a buffer
 * @param {String} string Input string
 * @returns {Buffer}
 */
function stringToBuffer(string) {
  let stringBuffer = Buffer.alloc(0);

  for (let char of string) {
    let charBuffer = Buffer.alloc(1, char.charCodeAt());
    stringBuffer = Buffer.concat([stringBuffer, charBuffer]);
  }

  return stringBuffer;
}

/**
 * bufferToString takes in a buffer and returns a string
 * @param {Buffer} buffer Input buffer to convert
 * @returns {String}
 */
function bufferToString(buffer) {
  let string = '';

  for (let code of buffer) {
    string += String.fromCharCode(code);
  }

  return string;
}