const convertToCelsius = function(x) {
  let res = (x - 32) * (5/9);
  let roundstr = +res.toFixed(1);
return roundstr;
};

const convertToFahrenheit = function(x) {
  let res = x * (9/5) + 32;
  res = +res.toFixed(1);
  return res;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
 