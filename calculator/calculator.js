function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (numbers) {
	let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function multiply (numbers) {
	let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
}

function power(num, exponent) {
	return Math.pow(num, exponent);
}

function factorial(num) {
	let output = 1;
  for (let i = 1; i <= num; i++) {
    output *= i;
  }
  return output;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
