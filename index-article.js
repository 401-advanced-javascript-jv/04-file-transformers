'use strict';

const fs = require('fs').promises;

const buffers = {
  article: createBuffer('<article>'),
  articleClose: createBuffer('</article>'),
  h2: createBuffer('<h2>'),
  h2Close: createBuffer('</h2>'),
  h3: createBuffer('<h3>'),
  h3Close: createBuffer('</h3>'),
  p: createBuffer('<p>'),
  pClose: createBuffer('</p>'),
  newline: createBuffer('\n'),
};

let indexBuffer = Buffer.alloc(0);

fs.readFile('./files/pair-programming.txt')
  .then((fileContents) => {

    indexBuffer = Buffer.concat([indexBuffer, buffers.article, buffers.newline]);
    console.log(indexBuffer.toString());

  })
  // .then(() => { console.log(fileBuffer); })
  .catch((err) => {
    throw err;
  });

/**
 * createBuffer takes in a string and returns a buffer
 * @param {string} string Input string
 * @returns {Buffer}
 */
function createBuffer(string) {
  let stringBuffer = Buffer.alloc(0);

  for (let char of string) {
    let charBuffer = Buffer.alloc(1, char.charCodeAt());
    stringBuffer = Buffer.concat([stringBuffer, charBuffer]);
  }

  return stringBuffer;
}
