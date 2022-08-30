const num1 = 5;
const num2 = 10;

const addValues = () => {
  console.log(`the sum is: ${num1 + num2}`);
};

//  If we have a function invoked inside the module, the code will run even if is not assigned to a variable and exported to the file we are running
addValues();
