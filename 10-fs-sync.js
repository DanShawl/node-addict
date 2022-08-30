//  File System
//  We can do this synchronously or asynch

const { readFileSync, writeFileSync, read } = require('fs');
console.log('start');
//  readFileSync requires to parameters (path to file, the enconding 'utf-8')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// console.log(first, second);

//  writeFileSync is used for creating files (filename, value passed)
//  If the filename doesnt exist, it will create the file. If it does, it will overwrite
//  We can append to the file with a 3rd parameter ({flag: 'a'})
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
);

//  we use ASYNC because the the synchronous tasks may take a long time
console.log('done with this task');
console.log('starting the next task');
