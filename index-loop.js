'use strict';

const fs = require('fs').promises;

// Code to write into file:
const insertCode = `'use strict';
let names = ['John Paul', 'John George', 'John Rob'];
names.forEach( (name) => { console.log(name); });
`;

// Procedure:
// Iterate over each string, get byte for each character, push the bytes one by one to a new buffer
let loopBuffer = Buffer.alloc(0);

for (let i = 0; i < insertCode.length; i++) {
  let charBuffer = Buffer.alloc(1);
  charBuffer[0] = insertCode.charCodeAt(i);
  loopBuffer = Buffer.concat([loopBuffer, charBuffer]);
}

fs.writeFile('./files/loop.js', loopBuffer)
  .then(() => { console.log('wrote file'); })
  .catch((err) => { throw err; });
