//The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

const fibonacci = function (number) {
  if (number <= 2) {
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
};

console.log(fibonacci(4));
console.log(fibonacci(6));
