const stringSplitter = function (string, seperator) {
  if (string === "") {
    return "";
  }
  if (string[0] === seperator) {
    return stringSplitter(string.slice(1), seperator);
  } else {
    return string[0] + stringSplitter(string.slice(1), seperator);
  }
};

console.log(stringSplitter("02/20/2020", "/")); //02202020
