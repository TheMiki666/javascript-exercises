const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(array) {
	return array.reduce((x,y)=>x+y, 0);
};

const multiply = function(array) {
  return array.reduce((x,y)=>x*y, 1);
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(x) {
	if (x<=1){
    return 1;
  }else{
    return x*factorial (x-1);
  }
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
