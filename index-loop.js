'use strict';

const fs = require('fs').promises;

// Code snippet to write into file:
const insertCode = `'use strict';
let names = ['John Paul', 'John George', 'John Rob'];
names.forEach( (name) => { console.log(name); });
`;

// Procedure:
// Iterate over each string, get byte for each character, push the bytes one by one to a new buffer
let loopBuffer = Buffer.alloc(0);

for (let char of insertCode) {
  let charBuffer = Buffer.alloc(1, char.charCodeAt());
  loopBuffer = Buffer.concat([loopBuffer, charBuffer]);
}

// Write the file
fs.writeFile('./files/loop.js', loopBuffer)
  .then(() => { console.log('wrote file'); })
  .catch((err) => { throw err; });
