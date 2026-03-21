const add = function(num1, num2) {
	return num1 + num2;

};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
        return array.reduce((num1, num2) => num1 + num2, 0) ;	
	
};

const multiply = function(array) {
       return array.reduce((num1, num2) => num1 * num2) 
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(n) {
	let product = 1
        for (i = n; i > 0; i--)
        product *= i;

        return product;         
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
