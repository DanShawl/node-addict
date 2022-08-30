const path = require('path');

console.log(path.sep);

//  join creates a normalized path
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

//  basename returns the last file of a file path
const base = path.basename(filePath);
console.log(base);

//  resolve acecpts a sequence of paths or path segments and resolves it to an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
