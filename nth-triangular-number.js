//The nth triangular number is the number of dots composing a triangle with n dots on a side,
//and is equal to the sum of the n natural numbers from 1 to n.
//This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

const nthTriangularNumber = function (number) {
  if (number === 1) {
    return 1;
  }

  return number + nthTriangularNumber(number - 1);
};

console.log(nthTriangularNumber(2));
console.log(nthTriangularNumber(3));
console.log(nthTriangularNumber(4));
console.log(nthTriangularNumber(7));
