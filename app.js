//  We can add tag on .promises to grab promise functionality built into our readfile
const { readFile, writeFile } = require('fs').promises;

//  util gives us promise functionality without writing out a full promise
//  we need to pass the path AS WELL AS the encoding 'utf8'
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

//  common practice to utilize try/catch block
const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS A FILE: ${first}, ${second}`,
      { flag: 'a' }
    );

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

//  Creating a promise
//  This is simplified with the util 'promisify()'
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

//  Chaining .then() and .catch() for a promise
//  replaced with async await start() function
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// readFile('./content/first.txt', 'utf8', (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data);
//   }
// });
