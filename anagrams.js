/* eslint-disable no-unused-vars */
//if the user types "east", the program should list all 24 permutations,
// including "eats", "etas", "teas", and non-words like "tsae".
//substring() : method returns the part of the string between the start and end indexes or to the end of the string.

let anagrams = [];

const generateAnagram = function (word, anagram = "") {
  if (!word) {
    anagrams.push(anagram);
    return;
  }
  for (let i = 0; i < word.length; i++) {
    anagram += word[i];
    generateAnagram(word.slice(0, i) + word.slice(i + 1), anagram);
    anagram = anagram.slice(0, anagram.length - 1);
  }
};

generateAnagram("DOG");
generateAnagram("A");
console.log(anagrams);
