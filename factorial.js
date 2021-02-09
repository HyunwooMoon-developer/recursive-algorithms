//For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

const factorial = function (number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
};

console.log(factorial(5));
