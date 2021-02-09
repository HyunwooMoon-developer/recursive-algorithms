//     0   =    0
//     1   =    1
//     2   =   10
//     3   =   11
//     ..........
//     8   =   1000

const binary = function (number) {
  if (number === 0 || number === 1) {
    return number.toString();
  }

  const lsb = (number % 2).toString();
  const restOfBitsInDecimal = Math.floor(number / 2);
  const restOfBitsInBinary = binary(restOfBitsInDecimal);
  return restOfBitsInBinary + lsb;
};

console.log(binary(16));
console.log(binary(18));
