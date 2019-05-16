'use strict';

const fs = require('fs');

// Code to write into file:
const insertCode = `'use strict';
let names = ['John Paul', 'John George', 'John Rob'];
names.forEach( (name) => { console.log(name); });
`;

// Procedure:
// Iterate over each string, get byte for each character, push the bytes one by one to a new buffer
const loopBuffer = Buffer.alloc(insertCode.length);

for (let i = 0; i < insertCode.length; i++) {
  loopBuffer[i] = insertCode.charCodeAt(i);
}

console.log(loopBuffer);

fs.writeFile('./files/loop.js', loopBuffer, (err) => {
  if (err) throw err;
  console.log('wrote file');
});
