//  npm - global command, comes with node
//  npm --version

//  local dependency - use it only in this particular project
//  npm i <packageName>

//  global dependency - use it in any project
//  npm instlal -g <packageName> (mac)
//  sudo npm install -g <packageName>

//  package.json - manifest file (stores important info about project/package)
//  manual approach (create package.json in root, create props, etc)
//  npm init (step by step, press enter to skip)
//  npm init -y (everything default)

//  if you want to publish a package, the name must be unique

const _ = require('lodash'); //  must install dependencies first to use it

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
