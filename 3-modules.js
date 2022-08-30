//  Modules

//  We execute one file (app.js), however we split the code into modules
//  Modules are 'encapsulated code' - we only share what we want to share
//  Node uses CommonJS - with CJS, every file is a module (by default)

// const names = require('./4-names');
const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternatives');
require('./7-mind-grenade');

// sayHi('susan');
// sayHi(john);
// sayHi(peter);
