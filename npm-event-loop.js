//  npm - global command, comes with node
//  npm --version

//  LOCAL
//  local dependency - use it only in this particular project
//  npm i <packageName>

//  GLOBAL
//  global dependency - use it in any project
//  npm instlal -g <packageName>
//  sudo npm install -g <packageName> (mac)

//  PACKAGE.JSON SET UP
//  package.json - manifest file (stores important info about project/package)
//  manual approach (create package.json in root, create props, etc)
//  npm init (step by step, press enter to skip)
//  npm init -y (everything default)

//  PACKAGE-LOCK.JSON
//  Dependencies and packages have versions
//  The package-lock.json stores that version

//  DEV DEPENDENCIES
//  npm i nodemon -D
//  npm i nodemon --save-dev
//  When would we install as a dev dependency? Testing, formatting, linting

//  UNINSTALLING PACKAGES
//  npm uninstall <packageName>
//  Nuclear approach:
//    > delete node_modules directory and package-lock.json
//    > removing the dependency from the package.json file
//    > npm install

//  VERSIONS
//  1.1.1
//    > First number is a major change, could be breaking changes
//    > Minor changes (backward compatable)
//    > Patch for bug fix

//  if you want to publish a package, the name must be unique

//  IF WE HAVE package.json, WHEN WE COPY A REPO, WE CAN USE npm install TO INSTALL ALL DEPENDENCIES

// const _ = require('lodash'); //  must install dependencies first to use it

// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);

// console.log(newItems);
// console.log('hello people');

//  EVENT LOOP
//  'The event loop is what allows Node.js to perform non-blocking I/O (input/output) operations, despite the fact that JS is single threaded - by offloading operations to the system kernel whenever possible

//  nodejs.dev event loop

//  1.  Registers callback
//  2.  Only when the operation is complete, it executes the callback
//  (all immediate tasks first, followed by the callbacks)

const { readFile } = require('fs');

console.log('started a first task');
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log('completed first task');
});

console.log('starting next task');
