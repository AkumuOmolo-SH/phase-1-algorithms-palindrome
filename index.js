function isPalindrome(word) {
const reversed = word.split("").reverse().join("");
  // Write your algorithm here
  return word === reversed;
}

module.exports = isPalindrome;

