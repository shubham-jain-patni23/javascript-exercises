const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((curr, item) => {
    curr = curr + item;
    return curr;
  },0);
};

const multiply = function(arr) {
  return arr.reduce((curr, item) => {
    // curr = curr * item;
    return curr * item;
  },1);
};

const power = function(a,b) {
  // let res = 1;
	// for(let i = 1;i<=b;i++){
  //   res = res * a;
  // }
  // return res;
  return a**b;
};

const factorial = function(a) {
	let res = 1;
  for(let i = 1;i<=a ;i++){
    res = res * i;
  }
  return res;
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
