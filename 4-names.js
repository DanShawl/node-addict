//  We can keep the secret variable local using modules (prohibitting use anywhere)
const secret = 'SUPER SECRET';
//  Shared:
const john = 'john';
const peter = 'peter';

module.exports = {
  john,
  peter,
};

// console.log(module);
