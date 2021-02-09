//Write a function that reverses a string.
//Take a string as input, reverse the string, and return the new string.

const reverseString = function (string) {
  if (string === "") {
    return "";
  }
  return reverseString(string.slice(1)) + string[0];
};

console.log(reverseString("HELLO"));
