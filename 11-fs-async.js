const { readFile, writeFile } = require('fs');

//  We need to provide a callback with async fs
//  Inside the callback, we pass in err and result
//  We get into a 'callback hell' for just a simple task, we need to use promises or async await to handle this better
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) return null;
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) return null;
    const second = result;
    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) return null;
        console.log('done with this task');
      }
    );
  });
});

console.log('starting next task');
